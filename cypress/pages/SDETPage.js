class SDETPage {
    elements = {
        applyButton: () => cy.get('a#apply_button.button[href="#app"]'),
        name: () => cy.get('input#first_name'),
        last_name: () => cy.get('input#last_name'),
        email: () => cy.get('input#email'),
        phone: () => cy.get('input#phone'),
        linkedin: () => cy.get('input#job_application_answers_attributes_0_text_value'),
        website: () => cy.get('input#job_application_answers_attributes_1_text_value'),
        some_text: () => cy.get('input#job_application_answers_attributes_2_text_value'),
        attachButton: () => cy.get('button[aria-describedby="resume-allowable-file-types"]'),
        attachButtonCL: () => cy.get('button[aria-describedby="cover_letter-allowable-file-types"]').as('attachButtonCL'),
        inputType: () => cy.get('input[type=file]'),
        submitButton: () => cy.get('input[type="button"][value="Submit Application"][id="submit_app"].button'),
    }
    clickApply() {
        this.elements.applyButton().click();
    }
    fillInput(field, text) {
        this.elements[field]().type(text);
    }
    uploadResume(text) {
        this.elements.attachButton().click();
        this.elements.inputType().first()
            .selectFile({
                contents: Cypress.Buffer.from(text),
                fileName: 'bini.pdf',
                mimeType: 'application/pdf',
                lastModified: Date.now(),
            }, { force: true });
    }
    uploadCoverLetter(text) {
        this.elements.attachButtonCL().click();
        this.elements.inputType().last()
            .selectFile({
                contents: Cypress.Buffer.from(text),
                fileName: 'bini.pdf',
                mimeType: 'application/pdf',
                lastModified: Date.now(),
            }, { force: true });
    }
    enterAndDeleteEmails(emails) {
        emails.forEach((email) => {
            this.elements.email().type(email);
            this.elements.submitButton().click();
            this.elements.email().clear();
        });
    }
}
module.exports = SDETPage;
