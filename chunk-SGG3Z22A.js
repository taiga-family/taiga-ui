import"./chunk-HU6DUUP4.js";var i=`<tui-textfield
    multi
    tuiChevron
    [content]="content"
>
    <label tuiLabel>Select items</label>
    <input
        tuiInputChip
        tuiSelectLike
        [(ngModel)]="value"
    />
    <ng-template tuiItem />
    <ng-container *tuiDropdown>
        <tui-textfield
            #filter
            tuiTextfieldSize="m"
            [style.margin.rem]="0.25"
        >
            <input
                placeholder="Type to filter"
                tuiInput
            />
        </tui-textfield>
        <cdk-virtual-scroll-viewport
            tuiScrollable
            [itemSize]="48"
            [style.height.px]="filtered().length * 48 + 8"
            [style.max-height.px]="200"
            [style.min-height.px]="56"
        >
            <tui-data-list tuiMultiSelectGroup>
                <button
                    *cdkVirtualFor="let item of filtered()"
                    tuiOption
                    [value]="item"
                >
                    {{ item }}
                </button>
            </tui-data-list>
        </cdk-virtual-scroll-viewport>
    </ng-container>
</tui-textfield>

<p>
    <button
        tuiButton
        type="button"
        (click)="onClick()"
    >
        Select bazillion
    </button>
</p>
`;export{i as default};
