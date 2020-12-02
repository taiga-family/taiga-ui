# rxjs-report-usage

### What is it?

The script within this package collects anonymous API usage statistics and reports them to the RxJS core team.

### How do you run it?

This package is included as a dependency in:

* [`eslint-plugin-rxjs`](https://github.com/cartant/eslint-plugin-rxjs)
* [`rxjs-etc`](https://github.com/cartant/rxjs-etc)
* [`rxjs-marbles`](https://github.com/cartant/rxjs-marbles)
* [`rxjs-spy`](https://github.com/cartant/rxjs-spy)
* [`rxjs-tslint-rules`](https://github.com/cartant/rxjs-tslint-rules)

So if you are using the most-recent version of any of those packages, you can run the following npm command:

```
npm rxjs-report-usage
```

Or, with yarn:

```
yarn rxjs-report-usage
```

If you're not using any of those packages, you can install `rxjs-report-usage` as a `devDependency` and then run one of the above commands, or you can use `npx` to run the script without installing the package:

```
npx rxjs-report-error
```

### What it does actually do?

When run inside a project, the script locates all JavaScript and TypeScript files - except for those in the `node_modules` directory - and parses them with Babel. The parsed code is searched for `import` statements and `require` calls that consume `rxjs` and a usage count is recorded for each consumed RxJS API.

The script also locates any `rxjs` and `typescript` packages within `node_modules` and reports their versions. The versions of other packages are **not included** in the report.

The anonymous statistics that are collected look like this:

```json
{
  "apis": {
    "rxjs": {
      "concat": 1,
      "merge": 1,
      "of": 4
    },
    "rxjs/operators": {
      "concatMap": 1,
      "mergeMap": 1
    }
  },
  "packageVersions": {
    "rxjs": ["6.5.5"],
    "typescript": ["3.9.5"]
  },
  "schemaVersion": 1,
  "timestamp": 1592659729551
}
```

Once the script has collected the usage statistics, the payload is shown and the developer is prompted to confirm the sending of the payload to the core team. The script sends no information without the developer's consent.

For more information see this blog post: [Reporting API Usage](http://ncjamieson.com/reporting-api-usage/).
