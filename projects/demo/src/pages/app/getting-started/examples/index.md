```html
<!doctype html>
<html lang="en">
  <head>
    ...
    <meta
      content="light dark"
      name="color-scheme"
    />
  </head>
  <body style="display: none">
    <script>
      // Or whatever key you provided to TUI_DARK_MODE_KEY
      const theme = localStorage?.getItem('tuiDark');

      if (theme === 'true' || (!theme && matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.setAttribute('tuiTheme', 'dark');
      }

      document.body.style.display = '';
    </script>
    ...
  </body>
</html>
```
