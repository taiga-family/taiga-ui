```json
{
  "projects": {
    "my-project": {
      "architect": {
        "build": {
          // ...
          "assets": [
            {
              "glob": "**/*",
              "input": "node_modules/@taiga-ui/icons/src",
              "output": "assets/taiga-ui/icons"
            }
          ]
        }
      }
    }
  }
}
```
