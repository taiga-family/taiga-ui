import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="PdfViewer"
    package="LAYOUT"
    type="components"
>
    <ng-template pageTab>
        <p>Wrapper component for viewing PDF files in an iframe</p>

        <div
            appearance="warning"
            tuiNotification
            class="tui-space_top-5"
        >
            PDF display in browsers is handled by each browser independently, using their own homegrown or 3rd-party
            code, as this is not part of the HTML spec. Keep in mind most mobile devices do not support displaying PDFs
            in iframe. Check it
            <a
                href="https://caniuse.com/pdf-viewer"
                target="_blank"
                tuiLink
            >
                here
            </a>
            . The only way to enforce rendering consistency in all browsers is to do the rendering server-side, bundle
            your own JS PDF renderer, or use a 3rd-party rendering service. If you want to display it yourself, so you
            need to rely on
            <code>WA_IS_MOBILE</code>
            token to provide suitable alternative behavior. For example, you can use third-party service
            <code>https://drive.google.com/viewerng/viewer?embedded=true&url=$YOUR_PUBLIC_PATH_TO_PDF</code>
            or your own service to render PDF by
            <a
                href="https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#which-browsersenvironments-are-supported"
                target="_blank"
                tuiLink
            >
                pdf.js.
            </a>
        </div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index) {
                        @case (0) {
                            <span>
                                Note that you need to bypass sanitizer in order to use the URL so make sure you trust it
                            </span>
                        }
                        @case (1) {
                            <span>
                                Use
                                <a
                                    fragment="responsive"
                                    tuiLink
                                    [routerLink]="routes.SheetDialog"
                                >
                                    ResponsiveDialog
                                </a>
                                to display iframe in a
                                <a
                                    tuiLink
                                    [routerLink]="routes.SheetDialog"
                                >
                                    SheetDialog
                                </a>
                                on mobile devices
                            </span>
                        }
                        @case (2) {
                            <span>
                                Use
                                <a
                                    tuiLink
                                    [routerLink]="routes.Loader"
                                >
                                    Loader
                                </a>
                                and
                                <a
                                    tuiLink
                                    [routerLink]="routes.BlockStatus"
                                >
                                    BlockStatus
                                </a>
                                to display additional states
                            </span>
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>
</tui-doc-page>
`;export{i as default};
