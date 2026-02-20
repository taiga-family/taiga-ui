import"./chunk-HU6DUUP4.js";var o=`<tui-textfield
    tuiChevron
    [stringify]="stringify"
>
    <input
        tuiSelect
        [formControl]="control"
    />

    <tui-data-list *tuiDropdown>
        @for (item of items; track item) {
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
`;export{o as default};
