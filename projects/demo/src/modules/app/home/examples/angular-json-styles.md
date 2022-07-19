```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@taiga-ui/core/styles/taiga-ui-global.less",
              "node_modules/@taiga-ui/core/styles/taiga-ui-theme.less",
              "node_modules/@taiga-ui/core/styles/taiga-ui-fonts.less",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
```
