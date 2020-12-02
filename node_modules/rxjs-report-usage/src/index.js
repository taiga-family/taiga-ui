"use strict";

const bent = require("bent");
const chalk = require("chalk");
const prompts = require("prompts");
const collectUsage = require("./collect-usage");
const { entryId, formId } = require("../config");

module.exports = async function (cwd) {
  console.log(`Collecting usage within '${cwd}' ...`);
  const usage = collectUsage(cwd);
  console.log("Usage collected:");
  console.log(chalk.green(JSON.stringify(usage, null, 2)));
  const { value } = await prompts([
    {
      type: "confirm",
      name: "value",
      message: "Report the above usage to the core team?",
      initial: true,
    },
  ]);
  if (!value) {
    console.log("Not reporting usage.");
    return;
  }
  console.log("Reporting usage ...");
  const content = `${entryId}=${encodeURIComponent(JSON.stringify(usage))}`;
  const headers = {
    "Content-Length": content.length,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const post = bent("https://docs.google.com", "POST", 200, headers);
  await post(`/forms/d/e/${formId}/formResponse`, content);
  console.log("Usage sent. Thanks for your help.");
};
