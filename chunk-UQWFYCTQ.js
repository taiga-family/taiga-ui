import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Button"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <div>
            Button is a basic component used for both icon buttons and regular buttons with optional icons on either
            side. It can be applied to
            <code>button</code>
            and
            <code>a</code>
            tags. When used as
            <code>tuiIconButton</code>
            don't forget to still put text label within the tag for accessibility.
        </div>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            />
            <ng-template #description>
                @switch ($index) {
                    @case (0) {
                        Simple buttons with preset size options.
                    }
                    @case (1) {
                        Buttons support all built-in appearances. See
                        <a
                            tuiLink
                            [routerLink]="routes.Appearance"
                        >
                            Appearance
                        </a>
                        directive for more.
                    }
                    @case (2) {
                        Using icons and other elements, such as an
                        <a
                            tuiLink
                            [routerLink]="routes.Avatar"
                        >
                            Avatar
                        </a>
                        inside buttons in a variety of ways.
                    }
                    @case (3) {
                        Buttons can show a loading indicator when performing an action. Dedicated
                        <code>TuiButtonLoading</code>
                        component helps with accessibility by keeping button focusable while preventing click events.
                    }
                    @case (4) {
                        Default values for buttons can be configured using DI options.
                    }
                    @case (5) {
                        Use
                        <code>tuiButtonVertical</code>
                        attribute to set different layout.
                    }
                    @case (6) {
                        Nested elements with a little bit of CSS can make button appear to have sections.
                    }
                }
            </ng-template>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <button
                tuiButton
                type="button"
                [appearance]="appearance.appearance"
                [iconEnd]="icons.iconEnd"
                [iconStart]="icons.iconStart"
                [loading]="loading"
                [size]="size"
                [tuiAppearanceFocus]="appearance.focus"
                [tuiAppearanceMode]="appearance.mode"
                [tuiAppearanceState]="appearance.state"
            >
                Button
            </button>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeXS | TuiSizeL"
                [items]="sizes"
                [(value)]="size"
            >
                Size of the button
            </tr>
            <tr
                name="[loading]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="loading"
            >
                Loading indicator (import
                <code>TuiButtonLoading</code>
                )
            </tr>
            <tbody
                #appearance
                tuiDocAppearance
            ></tbody>
            <tbody
                #icons
                tuiDocIcons
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
