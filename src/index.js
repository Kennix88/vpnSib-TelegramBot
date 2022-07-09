// Подключение Telegraf для создания бота
const { Telegraf } = require("telegraf")
// Подключение path
const path = require('path')
// Подключение dotenv для скрытия токена
require("dotenv").config()

// Объявление бота
const bot = new Telegraf(process.env.BOT_TOKEN)

// Подключаем TelegrafI18n для создания локализации
const TelegrafI18n = require('telegraf-i18n')
const i18n = new TelegrafI18n({
    defaultLanguage: 'ru',
    allowMissing: false, //default true
    directory: path.resolve(__dirname, 'locales')
})
bot.use(i18n.middleware())

// Обработка команд start и help
bot.use(require('./composers/start.composer'))

// Старт бота
bot.launch()
console.log('Бот запущен')
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))