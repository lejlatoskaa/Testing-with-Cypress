Cypress


This repository contains automated test scripts for QA testing of the Inspire11 website. The tests are implemented using Cypress, a JavaScript-based end-to-end testing framework. The provided scripts cover various scenarios, including navigation, form submissions, and validation checks.

## Installation

1. Clone this repository:

    ```sh
    https://github.com/lejlatoskaa/-Testing-with-Cypress
    ```

2. Go to the project's root directory:

    ```sh
    cd Cypress-Assignment
    ```

3. Install the dependencies:
   
    **Using** `npm`
    ```sh
    npm install
    ```
    **Using** `yarn`
     ```sh
    yarn install
    ```

5. Opening the App:

    **Using** `npx`
    ```sh
    npx cypress open
    ```
    **Using** `yarn`
    ```sh
    yarn run cypress open
    ```
## Usage

Upon launching the application, you will be presented with the following testing method options. We recommend selecting the End-to-End (E2E) testing option:

![Alt Text](images/Screenshot%202024-01-22%20134346.png)


Within the E2E testing category, choose Chrome, and initiate the testing process by clicking on the `Start E2E Testing in Chrome` button:

![Alt Text](images/Screenshot%202024-01-22%20134855.png)

In the subsequent screen, commence the testing procedure by selecting 
`test.cy.js`

![Alt Text](images/Screenshot%202024-01-22%20141911.png)


## Project Structure


* **[test.cy.js](cypress/e2e//tests//test.cy.js)**: Contains the main test suite with multiple test cases.
* **[Pages](cypress/pages/)**: Contains page objects representing different pages of the application.
* **[Commands](cypress/support/commands.js)**: Custom Cypress commands used in the tests.

## Additional Information
* The `test-data` file contains a list of invalid emails for use in Test Case 3.
* Custom commands and support configurations are defined in the `commands.js` and `support/e2e.js` files.
* **Important**: Make sure to place the external files, such as `bini.pdf`, in the `files` folder. If the folder doesn't exist, create it in the root of your project.
"# Testing-with-Cypress" 
"# Testing-with-Cypress" 
"# Testing-with-Cypress" 
"# Testing-with-Cypress" 
