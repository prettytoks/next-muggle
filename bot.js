const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Command handler for /start command
bot.start((ctx) => ctx.reply('Welcome to my Muggle Link bot! \nUse /payment to get the payment link \nUse /share to launch the nextmuggle MiniApp'));

// Command handler for /payment command
bot.command('payment', async (ctx) => {
    try {
         const paymentLink = "https://muggle-link.onrender.com";
         await ctx.reply("Here's the payment link:\n" + paymentLink);
    } catch (error) {
        console.error('Error handling payment:', error);
        await ctx.reply('An error occurred while processing your payment. Please try again later.');
    }
});

// Command handler for /share command
bot.command('share', (ctx) => {
    const shareContent = 'Check out my awesome MiniApp, share with your friends: https://t.me/nextmuggle_bot/nextmuggle';
    ctx.reply(shareContent);
});

// Launch the bot
bot.launch()
    .then(() => console.log('Bot started successfully'))
    .catch((error) => console.error('Error starting bot:', error));
