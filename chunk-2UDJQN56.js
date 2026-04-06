import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Comment"
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
            <span [tuiComment]="direction">Birthday gift</span>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiComment]"
                tuiDocAPIItem
                type="TuiHorizontalDirection | TuiVerticalDirection | ''"
                [items]="directions"
                [(value)]="direction"
            >
                Direction of the comment mark
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
