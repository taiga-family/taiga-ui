import"./chunk-B4AJQJMI.js";var l=`\`\`\`html
<tui-textfield>
  <label tuiLabel>Email</label>
  <input
    tuiInput
    [(ngModel)]="value"
  />
  <tui-data-list-wrapper
    *tuiDropdown
    [items]="value | tuiEmails"
  />
  } }
</tui-textfield>
\`\`\`
`;export{l as default};
