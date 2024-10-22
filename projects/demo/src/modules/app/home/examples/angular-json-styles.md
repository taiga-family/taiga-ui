```json
{
  "projects": {
    "my-project": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              // Required
              "@taiga-ui/core/styles/taiga-ui-theme.less",
              "@taiga-ui/core/styles/taiga-ui-fonts.less",

              // Optional
              "@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less",
              "@taiga-ui/styles/taiga-ui-global.less"
            ]
          }
        }
      }
    }
  }
}
```
