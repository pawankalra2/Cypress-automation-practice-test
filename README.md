<h1 align="center">Auotomation Practice site Tests using Cypress  </h1>

## Run Locally on Linux
Prerequisite :node and npm should be installed
- git clone https://github.com/pawankalra2/Cypress-automation-practice-test.git or unzip the attached folder.
- npm install -g cypress
- cd Cypress-automation-practice-site
- npm install
- npm run runAllTests

## Integrating with CI-CD (Jenkins) : 
This test can be integrated with ci-cd tool like Jenkins and can be run on linux machine/docker image.
Refer Sample pipeline : jenkinsSamplePipelineCypress.groovy

## Technology used:

 - Cypress 
 - JavaScript 
 - Cucumber
 - Mochawesome
 - multiple-cucumber-html-reporter
 - Jenkins

 ## Folder structure
 - integration : contains all Feature files along with Step definition
 - pageObject : contains the pageobject of login nd common page (main prouct) page.It contains locators and methods.

 - fixtures : it has a testdata.json file which contain info like username password .This is kept separate as we may need to update during run time .We can use shell/powershell/bat to update this file during run time.

 - plugins/index.js : contains cucumber configuration .

 - reports : contain the html report (index.html and dependent files) that is auto generated from all individual json files (cucumber-json folder)after each test .

 - screenshots : contain screenshots of failed test .This can be configured in cypress.json.

 - videos : this contain the video of the test that ran .configurable in cypress.json

 cypress.json : contain cypress test configuration's .
 package.json : contains all npm dependencies required and commands/scripts to run tests.
 Note we can mention the details like browser/headed/headless/tests to run in the "scripts": {} of package.json

 ## Scenarios automated 
 TC001 - Navigating and clicking Float menu (all 3 scenario and 10 Steps passed)

 TC002 - Sorting the products by price/name and check if correct sorting has been done .In this there are 2 Failures as in this website when we sort with Price: Highest first and Product Name: Z to A , sorting is not correct and is a bug/defect on wesbite .
 (2 Scenarios and 13 steps Passed,2 Scenarios and 2 steps failed )

 TC003 - E2E Test with login , add to cart ,checkut with payment .(all 3 scenarios ,13 steps passed)
 complete test report can be found under cypress\reports\index.html

