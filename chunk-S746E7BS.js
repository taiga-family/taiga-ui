import"./chunk-HU6DUUP4.js";var e=`<tui-textfield tuiChevron>
    <input
        placeholder="Country"
        tuiComboBox
        [(ngModel)]="value"
    />

    <ng-container *tuiDropdown>
        <!-- 42 = option height -->
        <!-- 8 = data list padding -->
        @let items = countries | tuiFilterByInput;
        <cdk-virtual-scroll-viewport
            tuiScrollable
            class="scroll"
            [itemSize]="42"
            [maxBufferPx]="42 * 10"
            [minBufferPx]="42 * 5"
            [style.height.px]="(items?.length || 1) * 42 + 8"
        >
            <tui-data-list withVirtualScroll>
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
