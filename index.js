const { Telegraf } = require("telegraf");
const { config } = require("dotenv");
const { randomDonaldQuote } = require("donald-quotes-trump");
config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.command("start", async (ctx) => {
  ctx.telegram.sendMessage(
    ctx.message.chat.id,
    "Hola, pulsa /donald para generar una frase de Donald Trump"
  );
});

bot.command("donald", async (ctx) => {
  ctx.telegram.sendMessage(ctx.message.chat.id, randomDonaldQuote());
});

bot.command("help", async (ctx) => {
  ctx.telegram.sendMessage(
    ctx.message.chat.id,
    `Puedes usar los comandos:
/start
/donald
/help

The Anti Procrastination Society
Deja de procrastinar!!!
Puedes colaborar en este u otros de nuestros proyectos
Github: https://github.com/The-Anti-Procrastination-Society/quotes-telegram-bot`
  );
});

bot.launch();
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
