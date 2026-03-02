import"./chunk-HU6DUUP4.js";var t=`{{ currency }} = getCurrencySymbol(currency);

<form [formGroup]="parametersForm">
    <div class="parameters">
        <tui-textfield
            tuiChevron
            class="tui-space_top-2"
        >
            <label tuiLabel>currency</label>

            <input
                formControlName="currency"
                tuiSelect
            />

            <tui-data-list-wrapper
                *tuiDropdown
                [items]="items"
            />
        </tui-textfield>
    </div>
</form>
`;export{t as default};
