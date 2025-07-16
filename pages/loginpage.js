const {test, expect} = require('@playwright/test')

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailField = page.locater('id=input-email')
        this.passwordField = page.locater('id=input-password')
        this.loginButton = page.locater('input:has-text("Login")')
    }

    async enterEmail(email) {
        await this.emailField.fill(email)
    }

    async enterPassword(password) {
        await this.passwordField(password)
    }

    async clickLogin() {
        await this.loginButton()
    }
}