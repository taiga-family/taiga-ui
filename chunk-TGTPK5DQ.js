import"./chunk-HU6DUUP4.js";var e=`<label tuiLabel>
    <tui-textfield
        multi
        tuiChevron
        [stringify]="stringify"
    >
        <input
            tuiInputChip
            [placeholder]="value.length ? '' : 'Picking users'"
            [(ngModel)]="value"
        />

        <tui-input-chip *tuiItem />

        <tui-data-list
            *tuiDropdown
            tuiMultiSelectGroup
        >
            @for (item of items; track $index) {
                <button
                    tuiOption
                    [value]="item.nickname"
                >
                    {{ item.name }} ({{ item.nickname }})
                </button>
            }
        </tui-data-list>
    </tui-textfield>
</label>
`;export{e as default};
