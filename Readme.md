## Running the tests

to run the test case run the following commands:

```
npm install
npx tsc (ignore any errors that may appear)
npm run wdio
```

### Generating the test report

there are two ways to generate the reports:

* `npm run allure:serve`: will run a local server and open the test results:

### Removing headless
To run the test case not in headless mode it is needed to change in the configurition file `wdio.conf.ts` as follow:
```
browserName: 'chrome',
'goog:chromeOptions': {
    args: ['headless', 'disable-gpu'] <--- Comment or remove line
},
```