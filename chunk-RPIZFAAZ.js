import"./chunk-HU6DUUP4.js";var e=`<tui-textfield tuiChevron>
    <input
        placeholder="Purpose loan"
        tuiComboBox
        [formControl]="control"
        [strict]="false"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [items]="items"
    />
</tui-textfield>

<p>
    <strong>Form control:</strong>
    <code>{{ control.value | json }}</code>
</p>
`;export{e as default};
