import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="BadgeNotification"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>
            Simple non-interactive badge. Used in headers, cells, cards, avatars to indicate notifications, such as new
            messages
        </p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample: 'html'"
        />

        <tui-doc-example
            heading="Custom color"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample: 'html,less'"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-badge-notification [size]="size">11</tui-badge-notification>
        </tui-doc-demo>
        <label
            tuiLabel="Content type"
            class="tui-space_vertical-3"
        ></label>

        <table tuiDocAPI>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeL"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Size
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
