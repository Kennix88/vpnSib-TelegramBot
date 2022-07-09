// Импортируем Composer и Markup из telegraf
const { Composer, Markup } = require('telegraf')
// Объявляем composer
const composer = new Composer()

// Обработка /start
composer.start((ctx) => {
    ctx.reply(
        // Достаем приветственное сообщение из текущей локализации
        ctx.i18n.t('start', {ctx}),
        // Добавляем кнопки нижнего меню
        Markup.keyboard([
            ['Инструкция'],
            ['Список устройств'],
            ['Поддержать']
    ]).resize())
})

// Обработка /help
composer.help(async (ctx) => {
    try {
        await ctx.replyWithHTML(
            ctx.i18n.t('help')
        )
    } catch (e) {
        console.error('Ошибка в вызове /help: ', e)
    }
})

// Экспортируем composer
module.exports = composer