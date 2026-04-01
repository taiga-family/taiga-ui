import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Tabs"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Component for creating tabs.</p>

        <div tuiNotification>
            If you use
            <code>routerLink</code>
            you must also add
            <code>routerLinkActive</code>
            directive.
        </div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-tabs-with-more
                [itemsLimit]="itemsLimit"
                [moreContent]="moreContent"
                [size]="size"
                [underline]="underline"
                [(activeItemIndex)]="activeItemIndex"
            >
                @for (button of buttons; track button) {
                    <button
                        *tuiItem
                        tuiTab
                        type="button"
                    >
                        {{ button }}
                    </button>
                }
            </tui-tabs-with-more>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[(activeItemIndex)]"
                tuiDocAPIItem
                type="number"
                [(value)]="activeItemIndex"
            >
                Active index item
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeM | TuiSizeL"
                [items]="sizes"
                [(value)]="size"
            >
                Size
            </tr>
            <tr
                name="[itemsLimit]"
                tuiDocAPIItem
                type="number"
                [(value)]="itemsLimit"
            >
                Visible tabs count limit
                <strong>
                    for
                    <code>TabsWithMore</code>
                    only
                </strong>
            </tr>
            <tr
                name="[moreContent]"
                tuiDocAPIItem
                type="PolymorpheusContent"
                [items]="moreContentVariants"
                [(value)]="moreContent"
            >
                "More" button content
                <strong>
                    for
                    <code>TabsWithMore</code>
                    only
                </strong>
            </tr>
            <tr
                name="[dropdownContent]"
                tuiDocAPIItem
                type="PolymorpheusContent"
            >
                "More" button dropdown content
                <strong>
                    for
                    <code>TabsWithMore</code>
                    only
                </strong>
            </tr>
        </table>
    </ng-template>

    <ng-template pageTab="Routing">
        <tui-doc-example
            heading="Tabs with routing"
            [content]="8 | tuiExample"
        >
            <router-outlet />
        </tui-doc-example>
    </ng-template>
</tui-doc-page>
`;export{o as default};
