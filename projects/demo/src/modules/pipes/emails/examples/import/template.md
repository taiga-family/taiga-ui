```html
<tui-input
  *ngIf="value | tuiEmails as emails"
  [(ngModel)]="value"
>
  Введите адрес
  <ng-template
    *ngIf="emails.length"
    [tuiDataList]
  >
    <tui-data-list-wrapper [items]="emails"></tui-data-list-wrapper>
  </ng-template>
</tui-input>
```
