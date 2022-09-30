```html
<div [formGroup]="testForm">
  <tui-radio-list
    formControlName="tariff"
    [items]="items"
  >
    <ng-template
      tuiRadioList
      let-item
    >
      <div class="tariff">Option &laquo;{{item.name}}&raquo;.</div>
      <div>{{item.description}}</div>
    </ng-template>
  </tui-radio-list>
</div>
```
