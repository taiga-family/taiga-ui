import"./chunk-B4AJQJMI.js";var e=`\`\`\`html
<tui-textfield
  tuiChevron
  [stringify]="stringify"
>
  <input
    tuiComboBox
    [(ngModel)]="value"
  />

  <tui-data-list-wrapper
    *tuiDropdown
    [items]="items"
    [itemContent]="stringify | tuiStringifyContent"
  ></tui-data-list-wrapper>
</tui-textfield>
\`\`\`
`;export{e as default};
