# RxJS TSLint

TSLint rules for rxjs.

## Rules

This repository provides the following rules:

| Rule name                         | Configuration | Description                                          |
| --------------------------------- | ------------- | ---------------------------------------------------- |
| rxjs-collapse-imports             | none          | Collapses multiple imports from rxjs to a single one |
| rxjs-pipeable-operators-only      | none          | Migrates side-effect operators to pipeables          |
| rxjs-no-static-observable-methods | none          | Migrates static Observable method calls              |
| rxjs-proper-imports               | none          | Updates RxJS 5.x.x imports to RxJS 6.0               |

## Migration to RxJS 6

Using the current set of rules allows you to automatically migrate your project which uses RxJS 5 to RxJS 6. Here's how you can perform the automatic migration:

```bash
npm i -g rxjs-tslint
rxjs-5-to-6-migrate -p [PATH_TO_TSCONFIG]
```

For an Angular CLI project the invocation of `rxjs-5-to-6-migrate` will be:

```bash
rxjs-5-to-6-migrate -p src/tsconfig.app.json
```

**Note:** The rules use type checking to find all the instances of operators that need to be migrated to pipeables. This requires you to have `rxjs@5` installed so that tslint could find the correct type definitions.

*If you're following the migration instructions from https://update.angular.io, between versions 5 and 6 you'll have to run `ng update @angular/core`. This step will install `rxjs-compat`, which will let `rxjs-5-to-6-migrate` to perform the correct code transformations.*

## Use rules

To use the exported rules without `rxjs-5-to-6-migrate`, use the `rulesDirectory` configuration property of `tslint.json`:

```json
{
  "rulesDirectory": [
    "node_modules/rxjs-tslint"
  ],
  "rules": {
    "rxjs-collapse-imports": true,
    "rxjs-pipeable-operators-only": true,
    "rxjs-no-static-observable-methods": true,
    "rxjs-proper-imports": true
  }
}
```

To lint your project use:

```
./node_modules/.bin/tslint -c tslint.json -p tsconfig.json
```

### Notes

* Once you run all the migrations check the diff and make sure that everything looks as expected. These fixers cover almost all cases we know of, but it's possible that some manual fixes can be required.
* Although the migration will format your source code, it's likely that that the style is not consistent with the rest of your project. To make sure that everything is properly following your project's style guide, we recommend you apply a formatter such as prettier or clang-format after the edits are made.

## License

MIT
