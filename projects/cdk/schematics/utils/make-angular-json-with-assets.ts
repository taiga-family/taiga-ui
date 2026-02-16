export function makeAngularJsonWithAssets(assets: string): string {
    return `
{
  "version": 1,
  "projects": {
    "demo": {
        "root": "",
        "architect": {
          "build": {
            "options": {
              "main": "test/main.ts",
              "styles": [
                "node_modules/@taiga-ui/styles/taiga-ui-fonts.less",
                "node_modules/@taiga-ui/styles/taiga-ui-global.less",
                "some.style"
              ],
              "assets": [${assets}
              ]
            }
          }
        }
    }
  }
}`;
}
