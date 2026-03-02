import"./chunk-HU6DUUP4.js";var t=`<tui-textfield
    tuiChevron
    [disabledItemHandler]="disabledItemHandler"
    [stringify]="stringify"
>
    @if (isMobile) {
        <select
            aria-label="Choose your side"
            placeholder="Choose your side"
            tuiSelect
            [formControl]="control"
            [items]="items"
        ></select>
    }

    @if (!isMobile) {
        <input
            placeholder="Choose your side"
            tuiSelect
            [formControl]="control"
        />
    }

    @if (!isMobile) {
        <tui-data-list-wrapper
            *tuiDropdown
            [items]="items"
        />
    }
</tui-textfield>
`;export{t as default};
