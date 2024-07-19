# angular.json

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "newProjectRoot": "projects",
  "projects": {
    "demo": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "configurations": {
            "development": {
              "extractLicenses": false,
              "namedChunks": true,
              "optimization": false,
              "sourceMap": true
            },
            "production": {
              "aot": true,
              "extractLicenses": true,
              "namedChunks": false,
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false
            }
          },
          "options": {
            "assets": [],
            "index": "src/index.html",
            "browser": "src/main.ts",
            "outputPath": "dist/demo",
            "scripts": [],
            "styles": ["src/global_styles.less"],
            "tsConfig": "tsconfig.json"
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "development": {
              "buildTarget": "demo:build:development"
            },
            "production": {
              "buildTarget": "demo:build:production"
            }
          },
          "defaultConfiguration": "development"
        }
      },
      "prefix": "app",
      "projectType": "application",
      "root": "",
      "schematics": {},
      "sourceRoot": "src"
    }
  },
  "version": 1
}
```

# tsconfig.json

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
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2015",
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
