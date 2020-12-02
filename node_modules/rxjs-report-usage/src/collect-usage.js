"use strict";

const { parse } = require("@babel/parser");
const { readFileSync, statSync } = require("fs");
const glob = require("glob");
const { resolve } = require("path");
const collectUsageWithinFile = require("./collect-usage-within-file");

module.exports = function collectUsage(cwd) {
  const usage = {
    apis: {},
    packageVersions: {},
    schemaVersion: 1,
    timestamp: Date.now(),
  };

  const sourceFiles = glob.sync("**/*.{js,jsx,ts,tsx}", {
    cwd,
    ignore: ["**/node_modules/**/*.*", "**/*.d.ts"],
  });
  sourceFiles.forEach((file) => {
    try {
      const resolvedFile = resolve(cwd, file);
      if (!statSync(resolvedFile).isFile()) {
        return;
      }
      const code = readFileSync(resolvedFile, "utf8");
      const ast = parse(code, {
        // https://babeljs.io/docs/en/babel-parser#ecmascript-proposals-https-githubcom-babel-proposals
        plugins: [
          "classPrivateMethods",
          "classPrivateProperties",
          "classProperties",
          "decorators-legacy",
          "jsx",
          "logicalAssignment",
          "numericSeparator",
          "typescript",
        ],
        sourceType: "unambiguous",
      });
      collectUsageWithinFile(ast, usage);
    } catch (error) {
      console.error(
        `Skipping '${file}' due to parsing error:\n  ${error.message}`
      );
    }
  });

  const packageFiles = glob.sync(
    "**/node_modules/**/{rxjs,typescript}/package.json",
    { cwd }
  );
  packageFiles.forEach((file) => {
    const content = JSON.parse(readFileSync(resolve(cwd, file), "utf8"));
    let versions = usage.packageVersions[content.name];
    if (!versions) {
      versions = usage.packageVersions[content.name] = [];
    }
    versions.push(content.version);
  });
  for (const key in usage.packageVersions) {
    const versions = usage.packageVersions[key];
    usage.packageVersions[key] = [...new Set(versions)];
  }
  return usage;
};
