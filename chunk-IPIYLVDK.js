import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="DatePicker"
    package="EXPERIMENTAL"
    type="components"
>
    <ng-template pageTab>
        <div
            appearance="warning"
            tuiNotification
        >
            This is a work in progress, do not use!
        </div>

        @for (example of ['Basic']; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>
</tui-doc-page>
`;export{t as default};
