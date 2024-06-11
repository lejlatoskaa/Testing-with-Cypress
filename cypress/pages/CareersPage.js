export class CareersPage {
    elements = {
        jobOpeningButton: () => cy.get('a.et_pb_button.et_pb_button_0.et_hover_enabled.et_pb_bg_layout_light').invoke("removeAttr", "target")
    }
    clickOnJobOpening() {
        this.elements.jobOpeningButton().click()
    }
}
