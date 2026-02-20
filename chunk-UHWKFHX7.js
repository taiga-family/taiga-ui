import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Badge"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Component for displaying text, pictures and icons.</p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample: 'html'"
        />

        <tui-doc-example
            heading="Sizes"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample: 'html'"
        />

        <tui-doc-example
            heading="Content type (mobile platform)"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample: 'html'"
        />

        <tui-doc-example
            heading="Long value"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample: 'html,less'"
        />

        <tui-doc-example
            heading="Customization"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample: 'html,less'"
        />

        <tui-doc-example
            heading="Options with DI"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <p>
                @if (contentType === 'with icon') {
                    <span
                        iconStart="@tui.check"
                        tuiBadge
                        [appearance]="appearance"
                        [size]="size"
                    >
                        <div tuiFade>Taiga UI</div>
                    </span>
                }

                @if (contentType === 'text') {
                    <span
                        tuiBadge
                        [appearance]="appearance"
                        [size]="size"
                    >
                        Taiga UI
                    </span>
                }

                @if (contentType === 'image') {
                    <img
                        alt="market"
                        src="assets/images/avatar.jpg"
                        tuiBadge
                        [appearance]="appearance"
                        [size]="size"
                    />
                }
            </p>
        </tui-doc-demo>
        <div>
            Content type
            <tui-radio-list
                name="content-type"
                size="s"
                class="tui-space_vertical-2"
                [items]="contentTypeVariants"
                [style.flex-direction]="'row'"
                [(ngModel)]="contentType"
            />
        </div>
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

            <tr
                name="[appearance]"
                tuiDocAPIItem
                type="TuiStatus"
                [items]="appearanceVariants"
                [(value)]="appearance"
            >
                Appearance
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
