import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="DatePicker"
    package="EXPERIMENTAL"
    type="components"
>
    <ng-template pageTab>
        <div
            appearance="warning"
            tuiNotification
        >
            <div tuiTitle>
                This is a work in progress
                <div tuiSubtitle>The APIs might change in the future, use with caution</div>
            </div>
        </div>

        @for (example of ['Basic', 'Labels']; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            />
            <ng-template #description>
                @switch ($index) {
                    @case (0) {
                        Date picker can be used together with date controls and buttons.
                    }
                    @case (1) {
                        You can customize content of date picker cells, with built-in extended spacing when
                        <code>Title</code>
                        is used.
                    }
                }
            </ng-template>
        }
    </ng-template>
</tui-doc-page>
`;export{i as default};
