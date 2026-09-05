```html
<!doctype html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
  <script>
    // Or whatever key you provided to TUI_DARK_MODE_KEY
    const theme = localStorage?.getItem('@tui[is-dark]');

    if (theme === 'true' || (!theme && matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.setAttribute('tuiTheme', 'dark');
    }
  </script>
</html>
```
