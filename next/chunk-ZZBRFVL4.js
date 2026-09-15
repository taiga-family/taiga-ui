import"./chunk-LQ6M4NCU.js";var i=`<tui-textfield tuiChevron>
    <input
        customComboBox
        [(ngModel)]="value"
        (pick)="alerts.open($event).subscribe()"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [items]="items | tuiFilterByInput"
    />
</tui-textfield>
`;export{i as default};
