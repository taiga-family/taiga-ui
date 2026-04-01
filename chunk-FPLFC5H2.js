import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="DataList"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <p>
            <code>DataList</code>
            allows to make lists or menus
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            >
                <ng-template #description>
                    @if ($index === 1 || $index === 4) {
                        <div tuiNotification>
                            Use
                            <code>TuiDataListDropdownManager</code>
                            for nested menus
                        </div>
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-data-list
                [emptyContent]="emptyContent"
                [size]="size"
            >
                @for (item of items$ | async; track item) {
                    <button
                        tuiOption
                        type="button"
                        [value]="[item]"
                    >
                        {{ item }}
                    </button>
                }
            </tui-data-list>
        </tui-doc-demo>
        <h2>DataList</h2>
        <table tuiDocAPI>
            <tr
                name="[emptyContent]"
                tuiDocAPIItem
                type="PolymorpheusContent"
                [items]="emptyContentVariants"
                [(value)]="emptyContent"
            >
                Content to display when there are no options inside
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeS | TuiSizeL"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Size of items
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
