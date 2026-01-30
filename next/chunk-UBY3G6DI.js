import"./chunk-B4AJQJMI.js";var i=`<tui-textfield [disabledItemHandler]="disabledItemHandler">
    <input
        placeholder="Click me to open dropdown"
        tuiInputTime
        [(ngModel)]="value"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [items]="items | tuiFilterByInput: matcher"
    />
</tui-textfield>
`;export{i as default};
