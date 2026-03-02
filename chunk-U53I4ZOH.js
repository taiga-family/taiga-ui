import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="DataListWrapper"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>
            <code>DataListWrapper</code>
            is an abstraction over
            <code>DataList</code>
            to simplify usage in common cases where precise control is not necessary.
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <h2>DataListWrapper</h2>

        <table tuiDocAPI>
            <tr
                name="[items]"
                tuiDocAPIItem
                type="readonly T[] | ReadonlyArray<readonly T[]> | null"
            >
                Items to select
            </tr>
            <tr
                name="[itemContent]"
                tuiDocAPIItem
                type="PolymorpheusContent<TuiContext<T>>"
            >
                Content of an item
            </tr>
            <tr
                name="[emptyContent]"
                tuiDocAPIItem
                type="PolymorpheusContent"
            >
                Content to display when there are no options inside
            </tr>
            <tr
                name="[disabledItemHandler]"
                tuiDocAPIItem
                type="TuiBooleanHandler<T>"
            >
                <div>A handler that gets an item and returns true if it is disabled.</div>
                <strong>Must be a pure function</strong>
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeL | TuiSizeXS"
            >
                Size of items
            </tr>
            <tr
                name="[labels]"
                tuiDocAPIItem
                type="readonly string[]"
            >
                Group label
            </tr>
            <tr
                name="(itemClick)"
                tuiDocAPIItem
                type="T"
            >
                Emits on click on item from datalist
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
