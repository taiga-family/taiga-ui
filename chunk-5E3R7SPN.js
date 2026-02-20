import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="Preview"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>
            Preview component allows to open modal for viewing some document and to work with it (download, zoom, rotate
            etc)
        </p>

        <p>As a document you can provide images, embeds and other arbitrary content.</p>

        <div
            tuiNotification
            class="tui-space_bottom-4"
        >
            The component automatically adjusts to the mobile device
        </div>

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
