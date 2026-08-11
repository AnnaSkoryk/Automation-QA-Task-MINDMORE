\# Cypress + TypeScript Test Project

A small test automation project created as part of a QA Automation task, using \*\*Cypress\*\* and \*\*TypeScript\*\*.



\## Prerequisites



Make sure you have installed:



\* \[Node.js](https://nodejs.org/)

\* npm (included with Node.js)

\* Git



You can check the installed versions:



```powershell

node --version

npm --version

git --version

```



\## Installation



Clone the repository:



```powershell

git clone <YOUR\_GITHUB\_REPOSITORY\_URL>

cd <PROJECT\_FOLDER>

```



Install the project dependencies:



```powershell

npm install

```



> You do \*\*not\*\* need to run `npm init` after cloning. The project already contains `package.json`.



If your npm version requires approval for Cypress installation scripts, run:



```powershell

npm approve-scripts cypress

```



Then verify Cypress:



```powershell

npx cypress verify

```



\## Run the tests



Open Cypress:



```powershell

npx cypress open

```



Select the required test type and run the test specifications from the Cypress interface.



\## TypeScript check



To check the TypeScript code without generating JavaScript files:



```powershell

npx tsc --noEmit

```



\## Project structure



```text

cypress/

├── e2e/          # Test specifications

├── fixtures/     # Test data

└── support/      # Custom commands and support files



cypress.config.ts # Cypress configuration

tsconfig.json     # TypeScript configuration

package.json      # Project dependencies

```



\## Tech stack



\* Cypress

\* TypeScript

\* Node.js

\* npm



