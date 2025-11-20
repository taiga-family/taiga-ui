import"./chunk-42JZD6NG.js";var r=`'{{ paymentSystem }}' = getPaymentSystem(cardNumber);

<form [formGroup]="parametersForm">
    <tui-textfield
        tuiChevron
        class="parameters"
        [tuiTextfieldCleaner]="false"
    >
        <input
            formControlName="cardNumber"
            placeholder="Choose card number"
            tuiSelect
        />

        <tui-data-list-wrapper
            *tuiDropdown
            [items]="items"
        />
    </tui-textfield>
</form>
`;export{r as default};
