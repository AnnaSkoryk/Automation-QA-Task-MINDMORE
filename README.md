# Cypress + TypeScript Test Project

Test automation project created as part of a **QA Automation task**.

**Tech stack:** Cypress · TypeScript · Node.js · npm

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* Git

Check your versions:

```powershell
node --version
npm --version
git --version
```

### 1. Clone the repository

```powershell
git clone https://github.com/AnnaSkoryk/Automation-QA-Task-MINDMORE.git
cd Automation-QA-Task-MINDMORE
```

### 2. Install dependencies

```powershell
npm install
```

> `npm init` is **not required** after cloning because the project already contains `package.json`.

If npm asks for permission to run Cypress installation scripts:

```powershell
npm approve-scripts cypress
```

Then verify the Cypress installation:

```powershell
npx cypress verify
```

### 3. Run the tests

Open the Cypress application:

```powershell
npx cypress open
```

Select the required test type and run the test specifications.

## 📁 Project Structure

```text
cypress/
├── e2e/          # Test specifications
├── fixtures/     # Test data
└── support/      # Custom commands and support files

cypress.config.ts # Cypress configuration
tsconfig.json     # TypeScript configuration
package.json      # Project dependencies
```

---

## 🛠 Technologies

* **Cypress** — end-to-end testing
* **TypeScript** — type-safe test development
* **Node.js / npm** — project environment and dependency management

## Assumptions and Limitations

* Cypress was not previously part of my experience, so additional time was required to become familiar with the framework and its conventions while completing the task.
* The recommended completion time was approximately **2 hours**. Considering that the assignment included setting up a new automation framework, implementing both login and end-to-end purchase flows, validating multiple requirements, and documenting the project, the suggested timeframe was not realistic for my situation, particularly given that Cypress was not a previously used framework.
* The assignment was received on **Monday, August 10**, with a submission deadline of **August 12**. As the assignment was provided during a working week, the available time outside other weekday commitments was also limited.
* The implementation focuses on fulfilling the requested minimum automation scope rather than building a complete production-level automation framework.
* The SauceDemo environment is assumed to be available and stable during test execution.
* CI/CD integration, advanced reporting, extensive cross-browser configuration, and broader test coverage were not included due to the limited timeframe.

## What I Would Improve With More Time

With additional time, I would further develop the solution in the following areas:

* Add additional **negative and edge-case scenarios** for login, product selection, cart, and checkout.
* Introduce the **Page Object Model (POM)** to further improve test structure and maintainability.
* Add **API-level testing** where applicable.
* Add **CI/CD integration**, for example using GitHub Actions or Jenkins.
* Add **test reporting** and improved failure diagnostics.
* Configure and verify test execution across **multiple browsers**.
* Expand the use of **reusable Cypress commands** and improve the overall test architecture.

## Time Spent

**Total time spent: 4 hours.**

The assignment indicated a recommended completion time of approximately **2 hours**. My actual time was longer, primarily because Cypress was not previously part of my experience.

The additional time included:

* Learning the Cypress framework and its conventions
* Setting up the Cypress + TypeScript project
* Understanding the framework structure and configuration
* Implementing the requested login and purchase flows
* Troubleshooting TypeScript/Cypress configuration issues
* Verifying the implemented tests
* Preparing the project documentation and README

I have included the actual time spent to provide a transparent representation of the work involved in completing the assignment.

