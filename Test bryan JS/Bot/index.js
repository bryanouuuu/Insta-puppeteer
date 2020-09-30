class InstaBot {

    constructor(){
        this.firebase = require('./firebase_db');
        this.config = require('./config/puppeteer.json')

    }

    async initPuppeteer(){
        const puppeteer = require('puppeteer');
        this.browser = await puppeteer.launch({
            headless : this.config.settings.headless

        });
        this.page = await this.browser.newPage();
        await this.page.setViewport({width:1500, height:764});

    }


    async visitInsta(){
        await this.page.goto(this.config.base_url);
        await this.page.waitForTimeout(2500);
        //on accède au input du username
        await this.page.click(this.config.selectors.username_field);
        await this.page.keyboard.type(this.config.username);
        // on accede au input du mdp
        await this.page.click(this.config.selectors.password_field);
        await this.page.keyboard.type(this.config.password);
        // on click sur le bouton connexion
        await this.page.click(this.config.selectors.login_button);
        // on clique sur le bouton connexion bis
        await this.page.waitForSelector(this.config.selectors.login_bis_button);
        await this.page.click(this.config.selectors.login_bis_button);
        // on clique sur le bouton activation notification
        await this.page.waitForSelector(this.config.selectors.active_notification);
        await this.page.click(this.config.selectors.active_notification);
        // on cherche un truc sur la recherche
        await this.page.click(this.config.selectors.recherche_field);
        await this.page.keyboard.type(this.config.recherche);
        // click sur la recherche de hashtag
        await this.page.waitForSelector(this.config.selectors.click_recherche);
        await this.page.click(this.config.selectors.click_recherche);


        
    }
    
    }




module.exports = InstaBot;