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
  <body>
    <!-- Make sure Angular SSR considers dark mode critical CSS and inlines it -->
    <span tuiTheme="dark"></span>
    <script>
      try {
        // Or whatever key you provided to TUI_DARK_MODE_KEY
        const dark = localStorage.getItem('tuiDark') || `${matchMedia('(prefers-color-scheme: dark)').matches}`;

        if (dark === 'true') {
          document.body.setAttribute('tuiTheme', 'dark');
        }
      } catch {}
    </script>
    ...
  </body>
</html>
```
