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
      try {
        // Or whatever key you provided to TUI_DARK_MODE_KEY
        const dark = localStorage.getItem('tuiDark') || `${matchMedia('(prefers-color-scheme: dark)').matches}`;

        if (dark === 'true') {
          document.body.setAttribute('tuiTheme', 'dark');
        }
      } catch {
      } finally {
        document.body.style.display = '';
      }
    </script>
    ...
  </body>
</html>
```
