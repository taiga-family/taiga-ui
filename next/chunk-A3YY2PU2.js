import"./chunk-B4AJQJMI.js";var o=`\`\`\`html
<button
  tuiButton
  type="button"
  [tuiDropdown]="dropdown"
  [(tuiDropdownOpen)]="open"
>
  Open menu
  <ng-template #dropdown>
    <tui-data-list>
      <button
        *ngFor="let item of items"
        tuiOption
        (click)="onClick()"
      >
        {{item}}
      </button>
    </tui-data-list>
  </ng-template>
</button>
\`\`\`
`;export{o as default};
