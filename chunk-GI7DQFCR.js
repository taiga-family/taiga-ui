import"./chunk-HU6DUUP4.js";var i=`<div class="t-list-search">
    <tui-textfield iconStart="@tui.search">
        <input
            placeholder="Search categories"
            tuiAutoFocus
            tuiInput
            [focused]="true"
            [(ngModel)]="value"
        />
    </tui-textfield>
</div>
<tui-data-list
    emptyContent="No results found"
    (keydown)="onKeyDown($event.key)"
>
    @if (!value) {
        <tui-opt-group>
            <button
                tuiOption
                type="button"
                [value]="all"
                (click.stop)="select(all)"
            >
                All
            </button>
            @for (item of items(); track item) {
                <button
                    tuiOption
                    type="button"
                    [value]="item.items"
                    (click.stop)="select(item.items)"
                >
                    {{ item.name }} only
                </button>
            }
        </tui-opt-group>
        <hr />
    }
    @for (item of items(); track item) {
        @let filtered = item.items | tuiFilter: filter : value;

        <tui-opt-group [label]="item.name">
            @if (filtered.length) {
                <div tuiMultiSelectGroup>
                    <tui-opt-group>
                        @for (item of filtered; track item) {
                            <button
                                tuiOption
                                type="button"
                                [value]="item"
                            >
                                {{ item }}
                            </button>
                        }
                    </tui-opt-group>
                </div>
            }
        </tui-opt-group>
    }
</tui-data-list>
`;export{i as default};
