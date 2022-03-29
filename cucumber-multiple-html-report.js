const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumber-json/",
  reportPath: "cypress/reports/cucumber-htmlreport.html/",
  metadata: {
    browser: {
      name: "chrome",
      version: "99",
    },
    device: "Local test machine",
    platform: {
      name: "Mac",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Automation Practice website-Pawan" },
      { label: "Release", value: "1.0.10" }
    ],
  },
});
