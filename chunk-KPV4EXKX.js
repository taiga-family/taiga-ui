import"./chunk-LQ6M4NCU.js";var e=`<tui-textfield tuiChevron>
    <input
        placeholder="Country"
        tuiSelect
        [(ngModel)]="value"
    />

    <cdk-virtual-scroll-viewport
        *tuiDropdown
        appendOnly
        tuiScrollRef
        [itemSize]="42"
        [style.block-size.rem]="12.5"
    >
        <tui-scroll-controls />
        <tui-data-list>
            <button
                *cdkVirtualFor="let item of countries"
                tuiOption
                type="button"
                [value]="item"
            >
                {{ item }}
            </button>
        </tui-data-list>
    </cdk-virtual-scroll-viewport>
</tui-textfield>
`;export{e as default};
