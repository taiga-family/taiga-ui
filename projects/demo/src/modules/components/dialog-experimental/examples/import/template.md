```html
<ng-template
  [tuiDialogOptions]="{ size: 'm' }"
  [(tuiDialog)]="open"
>
  <header>I am title</header>
  <p>I am dialog content</p>
  <footer>
    <button
      tuiButton
      appearance="secondary"
    >
      Secondary Button
    </button>
    <button tuiButton>Primary Button</button>
  </footer>
</ng-template>
```
