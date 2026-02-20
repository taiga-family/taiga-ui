import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Pin"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p class="tui-space_vertial-4">
            Pins are used to show a location on a 2D plane. Use
            <code>color</code>
            ,
            <code>background</code>
            ,
            <code>border</code>
            and
            <code>box-shadow</code>
            to customize the pin
        </p>

        <div tuiNotification>
            Pins are designed to be absolutely positioned on map or similar medium, therefore specifically their center
            is placed where you put them.
        </div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [fullsize]="true"
                [heading]="example"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{a as default};
