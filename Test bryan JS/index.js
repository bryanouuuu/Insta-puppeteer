const Bot = require('./Bot');

const run = async () => {

    const bot = new Bot();

    await bot.initPuppeteer().then(()=>console.log("puppeteer a fonctionné"));

    await bot.visitInsta().then(()=>console.log("connexion sur insta reussi"));

    await bot.closeBrowser().then(()=>console.log("le navigateur est fermé"));

}

run().catch(e=>console.log(e.message));