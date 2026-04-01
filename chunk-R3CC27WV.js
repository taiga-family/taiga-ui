import"./chunk-HU6DUUP4.js";var l=`<tui-textfield tuiChevron>
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
                tuiOption
                type="button"
                [value]="item"
            >
                {{ item }}
            </button>
        </tui-data-list>
    </cdk-virtual-scroll-viewport>
</tui-textfield>
`;export{l as default};
