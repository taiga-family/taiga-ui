```html
<!doctype html>
<html lang="en">
  <head>
    ...
  </head>
  <script>
    // Or whatever key you provided to TUI_DARK_MODE_KEY
    const theme = localStorage?.getItem('tuiDark');

    if (theme === 'true' || (!theme && matchMedia('(prefers-color-scheme: dark)'))) {
      document.body.setAttribute('tuiTheme', 'dark');
    }
  </script>
  <body>
    ...
  </body>
</html>
```
