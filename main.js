import { Telegraf, Markup } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '7459259584:AAHbNWZ_s5ERC8Zt96bKno0QEEY0VhvGXFE'
const webAppUrl = 'https://vk.com/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([
      Markup.button.webApp('Отправить сообщение', `${webAppUrl}/feedback`),
    ])
  )
})

bot.launch()
