```html
<!-- Visible checkbox -->
<label tuiBlock>
  <input
    type="checkbox"
    tuiCheckbox
    [(ngModel)]="value"
  />
  I'm a label
</label>

<!-- Implicit checkbox -->
<label tuiBlock>
  <input
    type="checkbox"
    tuiBlock
    [(ngModel)]="value"
  />
  I'm a label
</label>
```
