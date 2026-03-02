import"./chunk-HU6DUUP4.js";var p=`<tui-doc-page
    header="Mapper"
    package="CDK"
    type="pipes"
>
    <ng-template pageTab>
        <div>Pipe to transform a value with a function</div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{p as default};
