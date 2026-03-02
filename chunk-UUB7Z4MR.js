import"./chunk-HU6DUUP4.js";var i=`<tui-textfield
    tuiChevron
    [stringify]="stringify"
>
    <input
        tuiComboBox
        [formControl]="control"
        [matcher]="matcher"
    />

    <tui-data-list *tuiDropdown>
        @for (item of items | tuiFilterByInput; track item) {
            <button
                tuiOption
                type="button"
                [value]="item.id"
            >
                {{ item.name }}
            </button>
        }
    </tui-data-list>
</tui-textfield>

<p>
    <strong>Form control:</strong>
    <code>{{ control.value | json }}</code>
</p>
`;export{i as default};
