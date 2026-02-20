import"./chunk-HU6DUUP4.js";var i=`<label tuiLabel>
    Mobile dropdown with writable input
    <tui-textfield
        multi
        tuiChevron
        tuiDropdownMobile
        [disabledItemHandler]="disabled"
    >
        <input
            placeholder="Type something"
            tuiInputChip
            [(ngModel)]="writable"
        />

        @if (items | tuiFilterByInput; as items) {
            <ng-template
                let-close
                tuiDropdown
            >
                <tui-data-list-wrapper
                    tuiMultiSelectGroup
                    [items]="items"
                />
                <button
                    appearance="accent"
                    size="m"
                    tuiButton
                    tuiDropdownButton
                    type="button"
                    (click)="close()"
                >
                    Done
                </button>
            </ng-template>
        }
    </tui-textfield>
</label>

<label tuiLabel>
    Mobile sheet with options
    <tui-textfield
        multi
        tuiChevron
        tuiDropdownSheet
    >
        <input
            tuiInputChip
            tuiSelectLike
            [placeholder]="sheet.length ? '' : 'Select Pythons'"
            [(ngModel)]="sheet"
        />
        <tui-data-list-wrapper
            *tuiDropdown
            tuiMultiSelectGroup
            [items]="[items]"
            [labels]="['Select Pythons']"
        />
    </tui-textfield>
</label>

<label tuiLabel>
    Native MultiSelect
    <tui-textfield
        multi
        tuiChevron
        [identityMatcher]="identity"
        [stringify]="stringify"
    >
        <select
            tuiMultiSelect
            [items]="[users]"
            [labels]="['Pythons']"
            [placeholder]="native.length ? 'and...' : 'Select Pythons'"
            [(ngModel)]="native"
        ></select>
    </tui-textfield>
</label>
`;export{i as default};
