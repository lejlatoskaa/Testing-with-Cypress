class JobOpeningPage {
    elements = {
        selectDepartmentDropdown: (id) => cy.get(`#select2-chosen-${id}`),
        filterCount: () => cy.get('div#filter-count'),
        SDETButton: () => cy.get('div.opening a[data-mapped="true"]'),
    }
    selectOption(text, Id) {
        this.elements.selectDepartmentDropdown(Id).click();
        cy.get('div.select2-result-label')
            .contains(text)
            .parent('li.select2-result-selectable')
            .scrollIntoView()
            .click();
    }
    verifyFilterCount(expectedCount) {
        this.elements.filterCount().should('contain.text', expectedCount)
    }
    clickSDET(text) {
        this.elements.SDETButton().contains(text).scrollIntoView().click({ force: true });
    }
}
module.exports = JobOpeningPage;