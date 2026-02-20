import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Compass"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <tui-doc-example
            description="Direction isn't present (direction is NaN)"
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample: 'ts'"
        />

        <tui-doc-example
            description="Following pointer on the page"
            heading="Direction"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample: 'ts'"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-compass
                [degrees]="degrees"
                [style.color]="color"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[degrees]"
                tuiDocAPIItem
                type="number"
                [(value)]="degrees"
            >
                Pointer direction in degrees
            </tr>
            <h3>CSS customization</h3>
            <tr
                name="[style.color]"
                tuiDocAPIItem
                type="string"
                [items]="colorVariants"
                [(value)]="color"
            >
                Custom color
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
