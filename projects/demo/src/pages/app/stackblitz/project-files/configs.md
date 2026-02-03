## angular.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema",
  "root": "",
  "sourceRoot": "src",
  "version": 1,
  "projects": {
    "demo": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "configurations": {
            "development": {
              "namedChunks": true,
              "optimization": false,
              "sourceMap": true
            }
          },
          "options": {
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [],
            "styles": ["src/styles.less"],
            "tsConfig": "tsconfig.json"
          }
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "options": {
            "prebundle": false
          },
          "configurations": {
            "development": {
              "buildTarget": "demo:build:development"
            }
          },
          "defaultConfiguration": "development"
        }
      },
      "projectType": "application"
    }
  }
}
```

## tsconfig.json

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": ["ES2022", "dom"]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
```
