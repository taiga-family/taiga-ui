```json
{
  "projects": {
    "my-project": {
      "architect": {
        "build": {
          // ...
          "options": {
            "styles": [
              "@taiga-ui/core/styles/taiga-ui-theme.less",
              "@taiga-ui/core/styles/taiga-ui-fonts.less",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
```
