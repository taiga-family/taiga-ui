import"./chunk-42JZD6NG.js";var e=`<tui-textfield tuiChevron>
    <input
        placeholder="Country"
        tuiSelect
        [(ngModel)]="value"
    />

    <cdk-virtual-scroll-viewport
        *tuiDropdown
        tuiScrollable
        class="scroll"
        [itemSize]="44"
    >
        <tui-data-list>
            <button
                *cdkVirtualFor="let item of countries"
                new
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
