import { CareersPage } from "../../pages/CareersPage";
import { HomePage } from "../../pages/HomePage";
import { WorkPage } from "../../pages/WorkPage";
const homePage = new HomePage();
const careersPage = new CareersPage();
const workPage = new WorkPage();
describe('Test Case 1', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it(`Confirm seamless access to "Tech" jobs in the "North Macedonia" office on Inspire11's web app, including navigation, job view, and filtering, with consideration for 0 available jobs.`, () => {
    homePage.clickOnButton('Careers');
    cy.location("pathname").should("equal", "/careers/")
    careersPage.clickOnJobOpening();
    cy.origin('https://boards.greenhouse.io/inspire11/', () => {
      const JobOpeningPage = Cypress.require('../../pages/JobOpeningPage');
      const jobOpeningPage = new JobOpeningPage();
      jobOpeningPage.selectOption('Technology Service Line', '1')
      jobOpeningPage.selectOption('North Macedonia', '2')
      jobOpeningPage.verifyFilterCount(0)
    })
  });

  it(`Validate Console Output for "Healthcare" Tagged Case Studies in the "Work" Section of the Inspire11 Web App.`, () => {
    homePage.clickOnButton('Work')
    workPage.cardLog('Healthcare')
  });

  it(`Validate Email Field in SDET Job Application for the "North Macedonia" Office on Inspire11's Web App, ensuring accuracy in email format validation during the application process.`, () => {
    homePage.clickOnButton('Careers');
    careersPage.clickOnJobOpening();
    cy.origin('https://boards.greenhouse.io/inspire11/', () => {
      const SDETPage = Cypress.require('../../pages/SDETPage');
      const sdetPage = new SDETPage();
      const JobOpeningPage = Cypress.require('../../pages/JobOpeningPage');
      const jobOpeningPage = new JobOpeningPage();
      jobOpeningPage.selectOption('North Macedonia', '2')
      jobOpeningPage.clickSDET('Software Development Engineer in Test (SDET)')
      sdetPage.clickApply()
      sdetPage.fillInput('name', 'Albin');
      sdetPage.fillInput('last_name', 'Aqifi');
      sdetPage.fillInput('email', 'asd');
      sdetPage.fillInput('phone', '0710001515');
      sdetPage.fillInput('linkedin', 'asd');
      sdetPage.fillInput('website', 'asd');
      sdetPage.fillInput('some_text', 'asd');
      sdetPage.uploadResume('files/bini.pdf')
      sdetPage.uploadCoverLetter('files/bini.pdf')
      cy.fixture('test-data').then((data) => {
        sdetPage.enterAndDeleteEmails(data.invalidEmails)
      })
    })
  });
  
});

