import"./chunk-HU6DUUP4.js";var n=`<tui-doc-page
    header="TablePagination"
    package="ADDON-TABLE"
    type="components"
>
    <ng-template pageTab>
        <p>Component to show pagination in table footer</p>

        <tui-doc-example
            heading="Usage"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Custom size-option content"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [description]="tokenDescription"
            [fullsize]="true"
        >
            <ng-template #tokenDescription>
                You can customize the component via DI-token
                <code>TUI_TABLE_PAGINATION_OPTIONS</code>
                .

                <p class="tui-space_bottom-0">
                    Use function
                    <code>tuiTablePaginationOptionsProvider</code>
                    to provide new value of this token.
                </p>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Toggle pages label"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
            [fullsize]="true"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-table-pagination
                [items]="items"
                [page]="page"
                [size]="size"
                [total]="total"
                (paginationChange)="paginationChange.emitEvent($event); update($event)"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[total]"
                tuiDocAPIItem
                type="number"
                [(value)]="total"
            >
                Total amount of items/lines in the table.
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="number"
                [(value)]="size"
            >
                Items/Lines per page.
                <p>
                    Uses the first element inside
                    <code>items</code>
                    by default.
                </p>
            </tr>
            <tr
                name="[page]"
                tuiDocAPIItem
                type="number"
                [(value)]="page"
            >
                Current page.
                <p>Indexing starts at zero.</p>
            </tr>
            <tr
                name="[items]"
                tuiDocAPIItem
                type="readonly number[]"
                [items]="itemsVariants"
                [(value)]="items"
            >
                Options to select amount of lines per page.
            </tr>
            <tr
                #paginationChange
                name="(paginationChange)"
                tuiDocAPIItem
                type="TuiTablePagination"
            >
                Emits when
                <code>page</code>
                or
                <code>size</code>
                changes.
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{n as default};
