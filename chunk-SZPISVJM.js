import"./chunk-42JZD6NG.js";var i=`\`\`\`html
<tui-input
  *ngIf="value | tuiEmails as emails"
  [(ngModel)]="value"
>
  \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441
  <ng-template
    *ngIf="emails.length"
    [tuiDataList]
  >
    <tui-data-list-wrapper [items]="emails"></tui-data-list-wrapper>
  </ng-template>
</tui-input>
\`\`\`
`;export{i as default};
