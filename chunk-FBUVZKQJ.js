import"./chunk-HU6DUUP4.js";var i=`<form [formGroup]="form">
    <tui-textfield
        tuiChevron
        [tuiTextfieldCleaner]="false"
    >
        <label tuiLabel>Search by last name</label>

        <input
            formControlName="user"
            tuiComboBox
        />

        <tui-data-list-wrapper
            *tuiDropdown
            [items]="items | tuiFilterByInput: matcherString"
        />
    </tui-textfield>

    <tui-textfield
        tuiChevron
        class="tui-space_top-5"
        [stringify]="stringify"
        [tuiTextfieldCleaner]="false"
    >
        <label tuiLabel>With ids</label>

        <input
            formControlName="user2"
            tuiComboBox
        />

        <tui-data-list-wrapper
            *tuiDropdown
            [itemContent]="stringify | tuiStringifyContent"
            [items]="users | tuiFilterByInput: matcherUser"
        />
    </tui-textfield>
</form>
`;export{i as default};
