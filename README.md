# mb-car-price-viewing
This is a Test Automation Framework demonstration, using [Playwright](https://playwright.dev/) and Typescript.

Page Objects Model was used to organize the tests. Also I used a Component Pattern based to reuse the components in another Pages.

Besides: on `src\utils` there is a `eSelectors.ts` file with separated selector values and other constants for the tests.  
I implemented the `LandingPage.ts` using this file to separate the selectors in another file, but I also implemented the other Page Objects inserting the selectors directly in the Locators, thats another way to already define the Locators not spliting the modularization too much.

Fianlly, there is a CI implemented on Github Actions, take a look in the Actions tab to see this working.
## Pre requisites
- NodeJS - at least 18.14.0

## How to install
- Clone the repo: [using HTTPS]  
`git clone https://github.com/marcosvfranco/mb-car-price-viewing.git`
- In a terminal, execute:  
`npm i`

This will install Playwright and its dependencies, with the required Browsers.

Please, if you have some problem, contact me or access the Documentation about Browsers Instalation to get further information:  
https://playwright.dev/docs/browsers
## How to run the tests
- In a terminal, execute:  
`npm test`

The tests are implemented to run in both Chromium and Firefox.  
They will run by default in headless mode. 

- To run in -headed- mode, execute:  
`npm test -- --headed`

## Artifacts: Screenshot and Prices File

After the tests, a screenshot and a text file with the maximun and minimum prices found in the test will be generated in `artifacts` folder.  
They will be already uploaded to the repository in `fixed-artifacts` folder, to see they being generated, just run the test and look for the `artifacts` folder and the content inside.