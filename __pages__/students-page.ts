const sync = require('@wdio/sync').default

export class StudentsPage {

    static async open() {
        await browser.url('https://sites.google.com/view/students-info-page');
    }

    static async verifyTitle() {
        await expect(browser).toHaveTitle('Students Info Page', {containing: true})
    }

    static get uploadForm() {
        return {
            chooseBtn: browser.$('p=Choose file'),
            fileInput: browser.$('p*=.csv'),
            uploadBtn: browser.$('p=Upload'),
        };
    }

    static syncBtn() {
        return browser.$('p=Sync data')
    }

    static async verifyPageElements() {
        await expect((await this.uploadForm.chooseBtn)).toBeDisplayed();
        await expect((await this.uploadForm.fileInput)).toBeDisplayed();
        await expect((await this.uploadForm.uploadBtn)).toBeDisplayed();
    }
}
