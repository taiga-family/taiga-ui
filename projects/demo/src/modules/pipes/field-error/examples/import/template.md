```html
// ...
<tui-input [formControl]="user">User</tui-input>
<tui-error
  [formControl]="user"
  [error]="[] | tuiFieldError | async"
></tui-error>
// ...
```
