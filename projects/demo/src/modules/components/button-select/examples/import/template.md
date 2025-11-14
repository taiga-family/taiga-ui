```html
<button
  tuiButton
  tuiButtonSelect
  type="button"
  [(ngModel)]="item"
>
  {{ item }}
  <tui-data-list-wrapper
    *tuiDropdown
    new
    [items]="items"
  />
</button>
```
