import {createSourceFile} from 'ng-morph';

export function createAngularJson({
    stylesExist = false,
    root = '',
}: {stylesExist?: boolean; root?: string} = {}): void {
    createSourceFile(
        'angular.json',
        `
{
  "version": 1,
  "projects": {
    "demo": {
        "root": "${root}",
        "architect": {
          "build": {
            "options": {
              "main": "test/main.ts",
            ${
                stylesExist
                    ? `"styles": [
                  "node_modules/@taiga-ui/styles/taiga-ui-theme.less",
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
