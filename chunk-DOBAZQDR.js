import"./chunk-HU6DUUP4.js";var e=`<form [formGroup]="form">
    <tui-textfield
        tuiChevron
        tuiTextfieldSize="m"
        [content]="stringify | tuiStringifyContent"
    >
        <label tuiLabel>Term</label>

        <input
            formControlName="period"
            tuiSelect
        />
        <tui-data-list-wrapper
            *tuiDropdown
            [itemContent]="stringify | tuiStringifyContent"
            [items]="items | tuiFilterByInput"
        />

        <tui-icon
            tuiHintDirection="top-start"
            [tuiTooltip]="periodHint"
        />
    </tui-textfield>
    <ng-template #periodHint>
        You will pay in equal installments on a monthly basis You will pay in equal installments on a monthly basis
    </ng-template>
</form>

<button
    tuiHintAppearance="floating"
    tuiHintDirection="top-start"
    tuiLink
    type="button"
    class="tui-space_top-4"
    [tuiHint]="howToBuyTooltip"
>
    How to buy

    <ng-template #howToBuyTooltip>
        <ol class="tui-list tui-list_ordered tui-list_small">
            <li class="tui-list__item">Choose an installment plan</li>
            <li class="tui-list__item">Fill in the application</li>
            <li class="tui-list__item">
                When the bank approves, sign the contract via SMS or get it delivered to sign
            </li>
        </ol>
    </ng-template>
</button>
`;export{e as default};
