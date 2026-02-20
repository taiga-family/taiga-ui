import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="FilterByInput"
    package="KIT"
    type="pipes"
>
    <ng-template pageTab>
        <div>Pipe for filtering an array by value entered in a textfield</div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{t as default};
