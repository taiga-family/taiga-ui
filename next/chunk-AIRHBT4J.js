import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="ItemGroup"
    package="LAYOUT"
    type="components"
>
    <ng-template pageTab>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [fullsize]="true"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <div
                tuiItemGroup
                [autoscroll]="autoscroll"
                [horizontal]="horizontal"
            >
                @for (chip of chips; track chip) {
                    <label
                        tuiChip
                        [appearance]="chip === selected ? 'accent' : 'neutral'"
                    >
                        {{ chip }}
                        <input
                            appearance=""
                            name="radio"
                            tuiChip
                            type="radio"
                            [value]="chip"
                            [(ngModel)]="selected"
                        />
                    </label>
                }
            </div>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="horizontal"
                tuiDocAPIItem
                type="boolean"
                [(value)]="horizontal"
            >
                Horizontal layout (for mobile devices)
            </tr>
            <tr
                name="autoscroll"
                tuiDocAPIItem
                type="boolean"
                [(value)]="autoscroll"
            >
                Enable scrolling to selected chip (for interactive chips in horizontal layout)
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
