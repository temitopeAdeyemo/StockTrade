# Stock Trade API

This project contains multiple stock trading-related APIs and services, which are automatically tested using GitHub Actions CI/CD pipeline. The continuous integration is configured to run tests on every push and pull request to the `main` branch for the three different projects.

## Continuous Integration Setup

The code is tested using GitHub Actions with the following setup:

- The CI pipeline is triggered on:

  - **Pushes** to the `main` branch.
  - **Pull requests** targeting the `main` branch.
- **Node.js versions** tested:

  - 14.x
  - 16.x
  - 18.x
- **Projects tested**:

  - `Expressjs Authentication Middleware`
  - `Stock Trades API`
  - `Sequelize Stock Trades API`

### GitHub Actions Workflow Configuration

The GitHub Actions workflow is defined in the `.github/workflows/ci.yml` file.

#### NOTE: If you are not familiar with github actions CI Pipeline, You can inspect the pipeline to see the test cases status by navigating to the "Actions" menu on this codebase  repo headers (https://github.com/temitopeAdeyemo/StockTrade/actions). View any of the existing **workflow, click a job on the sidebar and view the "Run Tests" to inspect log and the tests cases status (passed or failed).**

# Running Tests Locally

### Expressjs Authentication Middleware project:

```bash
cd Expressjs\ Authentication\ Middleware
npm test
```

### Stock Trades API project:

```bash
cd Stock\ Trades\ API
npm test
```

### Sequelize Stock Trades API project:

```bash
cd Sequelize\ Stock\ Trades\ API
npm test
```
