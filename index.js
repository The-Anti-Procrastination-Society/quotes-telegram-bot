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

bot.launch();
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
