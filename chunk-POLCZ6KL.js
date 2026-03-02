import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Accordion"
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
            <tui-accordion
                [closeOthers]="closeOthers"
                [size]="size"
            >
                <button tuiAccordion>Taiga UI cdk</button>
                <tui-expand>
                    Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular
                    entities
                </tui-expand>
                <button [(tuiAccordion)]="open">Taiga UI core</button>
                <tui-expand>
                    Basic elements needed to develop components, directives and more using Taiga UI design system
                </tui-expand>
            </tui-accordion>
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="[closeOthers]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="closeOthers"
            >
                Other sections are closed when user opens one
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeS | TuiSizeL"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Size
            </tr>
            <tr
                name="[(tuiAccordion)]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="open"
            >
                Individual item open state
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
