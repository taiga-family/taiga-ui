import"./chunk-LQ6M4NCU.js";var t=`{{ currency }} = getCurrencySymbol(currency);

<form [formGroup]="parametersForm">
    <div class="parameters">
        <tui-textfield tuiChevron>
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
