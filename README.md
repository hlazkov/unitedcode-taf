# Test automation framework for unitedcode

## About:
This is kind of proof of concept for Unitedcode test automation framework 
using Playwright. 

## Prerequisites:

You will need to run this code:
 - ```Node.js -v 16+```
 - ```npm -v 8+```
 - User registered at https://cloud.scylladb.com/

## How to make this work?

- Clone this repo
- run `npm i`
- run `cp ./.env.example ./.env`
  - This config is also personal, so you could modify it as you like
- run code with `npm run test`
- [optional] to use playwright test runner, run `npm run test-ui`
- [optional] to check the code quality run `npm run lint`

### Setting proper env variables:

- `CI` forbids run tests with `only` and in headless mode. defaults to be empty (false)
- `RETRIES` shows how many times framework should retry on failure before treating test as failed. Defaults to 0
- `WORKERS` defines how many workers we should use. It's better to use 1 in case of headed mode, but for headless we 
could try more. Defaults to 1
- `BROWSER` - which browser should we use. *Should contain one of* `["chrome", "edge", "firefox", "safari"]`, defaults 
to `"chrome"`
- `BASE_URL` defines base URL of frontend app. Defaults to `"https://cloud.scylladb.com/"`
- `HEADLESS` allows to run browser in headless mode. Options `"true" | "false"`, defaults to `"false"`
- `TRACE_ON_FAIL_ONLY` allows Playwright to get trace on retries only (`"true"`) or always(`"false"`). Defaults to 
`"false"` 

### Useful links:

- [Playwright documentation](https://playwright.dev/)
