import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Group"
    package="CORE"
    path="core/directives/group"
    type="components"
>
    <ng-template pageTab>
        <div class="tui-space_bottom-3">
            A directive for grouping other components. For example,
            <a
                tuiLink
                [routerLink]="routes.Input"
            >
                Input
            </a>
            or
            <a
                tuiLink
                [routerLink]="routes.Button"
            >
                Button
            </a>
            .
        </div>

        <tui-doc-example
            heading="Inputs"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
            [fullsize]="true"
        />

        <tui-doc-example
            heading="ButtonGroup"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="Vertical group"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="Directive"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <div
                tuiGroup
                class="group"
                [collapsed]="collapsed"
                [orientation]="orientation"
                [rounded]="rounded"
                [size]="size"
            >
                <button
                    appearance="outline"
                    size="l"
                    tuiButton
                    type="button"
                >
                    Button 1
                </button>
                <button
                    appearance="outline"
                    size="l"
                    tuiButton
                    type="button"
                >
                    Button 2
                </button>
                <button
                    appearance="outline"
                    size="l"
                    tuiButton
                    type="button"
                >
                    Button 3
                </button>
            </div>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[collapsed]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="collapsed"
            >
                Remove margin between items (
                <code>2px</code>
                by default)
            </tr>

            <tr
                name="[rounded]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="rounded"
            >
                The first and the last items are rounded
            </tr>

            <tr
                name="[orientation]"
                tuiDocAPIItem
                type="TuiOrientation"
                [items]="orientationVariants"
                [(value)]="orientation"
            >
                Horizontal or vertical direction of group
            </tr>

            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeL"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Size of rounding
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
