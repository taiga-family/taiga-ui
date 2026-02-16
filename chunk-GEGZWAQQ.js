import"./chunk-B4AJQJMI.js";var n=`<tui-doc-page
    header="Popout"
    package="EXPERIMENTAL"
    type="components"
>
    <ng-template pageTab>
        <div>Using service to show content in a new window.</div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample: 'html,ts,less' : this[$index]"
                [heading]="example"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{n as default};
