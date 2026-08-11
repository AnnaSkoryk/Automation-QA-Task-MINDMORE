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

### 4. Check TypeScript

To check the TypeScript code without generating JavaScript files:

```powershell
npx tsc --noEmit
```

---

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
