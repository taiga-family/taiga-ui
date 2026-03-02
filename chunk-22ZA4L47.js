import"./chunk-HU6DUUP4.js";var e=`<tui-textfield tuiChevron>
    <input
        placeholder="Country"
        tuiComboBox
        [(ngModel)]="value"
    />

    <ng-container *tuiDropdown>
        <!-- 44 = option height -->
        <!-- 4 = margin between options -->
        <!-- 8 = data list padding -->
        @let items = countries | tuiFilterByInput;
        <cdk-virtual-scroll-viewport
            tuiScrollable
            class="scroll"
            [itemSize]="44"
            [maxBufferPx]="44 * 10"
            [minBufferPx]="44 * 5"
            [style.height.px]="(items?.length || 1) * (44 + 4) + 8"
        >
            <tui-data-list>
                <button
                    *cdkVirtualFor="let item of items"
                    tuiOption
                    type="button"
                    [value]="item"
                >
                    {{ item }}
                </button>
            </tui-data-list>
        </cdk-virtual-scroll-viewport>
    </ng-container>
</tui-textfield>
`;export{e as default};
