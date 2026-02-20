import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Tree"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Component to display tree-like data structure</p>

        <tui-doc-example
            heading="Manual"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Array"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="Template"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="Programmatic control"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />

        <tui-doc-example
            heading="Custom"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample: 'html,ts,less' : customContent"
        />

        <tui-doc-example
            heading="Checkbox"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
        />

        <tui-doc-example
            heading="Asynchronous"
            [component]="7 | tuiComponent"
            [content]="7 | tuiExample"
        />

        <tui-doc-example
            heading="Drag and drop"
            [component]="8 | tuiComponent"
            [content]="8 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <h3>TreeItem</h3>
        <table tuiDocAPI>
            <tr
                name="[tuiTreeController]"
                tuiDocAPIItem
                type="boolean"
            >
                Directive used to enable opening/closing of nodes with children.
                <code>Boolean</code>
                input is the default state.
            </tr>
        </table>

        <h3>Tree</h3>
        <table tuiDocAPI>
            <tr
                name="[childrenHandler]"
                tuiDocAPIItem
                type="TuiHandler<T, readonly T[]>"
            >
                Handler function to get children for a node
            </tr>
            <tr
                name="[content]"
                tuiDocAPIItem
                type="PolymorpheusContent<TuiTreeContext>"
            >
                Content template for tree nodes
            </tr>
            <tr
                name="[data]"
                tuiDocAPIItem
                type="T"
            >
                Data for the tree node
            </tr>
            <tr
                name="[tuiTreeController]"
                tuiDocAPIItem
                type="boolean"
            >
                Directive used to enable opening/closing of nodes with children.
                <code>Boolean</code>
                input is the default state.
            </tr>
            <tr
                name="[map]"
                tuiDocAPIItem
                type="Map<T, boolean>"
            >
                A map used with controller directive for manual programmatic toggling.
            </tr>
            <tr
                name="[trackBy]"
                tuiDocAPIItem
                type="TrackByFunction<T>"
            >
                Function used by
                <code>*ngFor</code>
                directive to render nested tree items.
            </tr>
        </table>

        <h3>Tokens</h3>
        <table tuiDocAPI>
            <tr
                name="TUI_TREE_CONTENT"
                tuiDocAPIItem
                type="PolymorpheusContent<TuiTreeItemContext>"
            >
                Provide your own component used internally to display node content (see
                <a
                    fragment="custom"
                    tuiLink
                    [routerLink]="routes.Tree"
                >
                    this example
                </a>
                )
            </tr>
            <tr
                name="TUI_TREE_CONTROLLER"
                tuiDocAPIItem
                type="TuiTreeController"
            >
                Provide your own open/closed controlling mechanism
            </tr>
            <tr
                name="TUI_TREE_ACCESSOR"
                tuiDocAPIItem
                type="TuiTreeAccessor<T>"
            >
                Provide your own tracker for value/node pairs (so you can match
                <code>TreeItem</code>
                instances to their corresponding
                <code>data: T</code>
                when using
                <code>Tree</code>
                component with custom open/closed controller)
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
