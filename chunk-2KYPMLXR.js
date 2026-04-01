import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Avatar"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
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
            <div
                [appearance]="appearance.appearance"
                [badge]="badge"
                [round]="round"
                [size]="size"
                [tuiAvatar]="src === '@tui.star' || src === 'MW' ? src : '@tui.user'"
            >
                <img
                    alt=""
                    [src]="src"
                />
            </div>
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="[tuiAvatar]"
                tuiDocAPIItem
                type="string"
                [items]="srcVariants"
                [(value)]="src"
            >
                Icon or initials. For images and videos and longer text use
                <code>ng-content</code>
            </tr>

            <tr
                name="[badge]"
                tuiDocAPIItem
                type="string"
                [items]="badgeVariants"
                [(value)]="badge"
            >
                Color of the dot badge indicator
            </tr>

            <tr
                name="[round]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="round"
            >
                Use round shape
            </tr>

            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeS | TuiSizeL"
                [items]="sizes"
                [(value)]="size"
            >
                Size
            </tr>

            <tbody
                #appearance
                tuiDocAppearance
                [hiddenOptions]="['focus', 'state', 'mode']"
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
