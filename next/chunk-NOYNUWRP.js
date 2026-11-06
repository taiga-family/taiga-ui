import"./chunk-LQ6M4NCU.js";var i=`<tui-doc-page
    header="Tooltip"
    package="KIT"
    path="kit/directives/tooltip"
    type="components"
>
    <ng-template pageTab>
        <p>Component to show icons with a hint by hover</p>

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
            <tui-icon
                [size]="size"
                [tuiHintAppearance]="hint.appearance"
                [tuiHintCentered]="hint.centered"
                [tuiHintDirection]="hint.direction"
                [tuiTooltip]="content"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiTooltip]"
                tuiDocAPIItem
                type="PolymorpheusContent"
                [(value)]="content"
            >
                content of the hint
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeS"
                [items]="sizeVariants"
                [(value)]="size"
            >
                size of the icon
            </tr>
            <tbody
                #hint
                tuiDocHint
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
