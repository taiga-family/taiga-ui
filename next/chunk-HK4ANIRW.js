import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="DataList"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <p>
            <code>DataList</code>
            allows to make lists or menus
        </p>

        <tui-doc-example
            heading="Links"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Submenu"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        >
            <div
                tuiNotification
                class="tui-space_bottom-3"
            >
                Use
                <code>TuiDataListDropdownManager</code>
                for nested menus
            </div>
        </tui-doc-example>

        <tui-doc-example
            heading="Form control"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="Custom list"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample: 'html,ts' : customList"
        />

        <tui-doc-example
            heading="Complex"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
        >
            <div
                tuiNotification
                class="tui-space_bottom-3"
            >
                Use
                <code>TuiDataListDropdownManager</code>
                for nested menus
            </div>
        </tui-doc-example>

        <tui-doc-example
            heading="Options with long text"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
        />
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
`;export{o as default};
