import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="BottomSheet"
    package="ADDON-MOBILE"
    type="components"
>
    <ng-template pageTab>
        <p>A non-modal draggable sheet</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <table tuiDocAPI>
            <tr
                name="[stops]"
                tuiDocAPIItem
                type="readonly string[]"
            >
                Scroll snap stops
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
