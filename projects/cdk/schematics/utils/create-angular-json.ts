import {createSourceFile} from 'ng-morph';

export function createAngularJson(
    {stylesExist}: {stylesExist: boolean} = {stylesExist: false},
): void {
    createSourceFile(
        'angular.json',
        `
{
  "version": 1,
  "projects": {
    "demo": {
        "root": "",
        "architect": {
          "build": {
            "options": {
              "main": "test/main.ts",
            ${
                stylesExist
                    ? `"styles": [
                  "node_modules/@taiga-ui/core/styles/taiga-ui-theme.less",
                  "some.style"
                ]
                `
                    : ''
            }}
          }
        }
    }
  }
}`,
        {overwrite: true},
    );
}
