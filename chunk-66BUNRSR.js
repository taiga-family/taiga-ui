import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="ProgressSegmented"
    package="KIT"
    path="kit/components/progress/progress-segmented"
    type="directives"
>
    <ng-template pageTab>
        <code>ProgressSegmented</code>
        is a component to visually represent the completion of a process or operation (as a segmented bar). It shows how
        much has been completed and how much remains.

        <p>
            Actually, this component is the same
            <a
                tuiLink
                [routerLink]="routes.ProgressBar"
            >
                <code>ProgressBar</code>
            </a>
            processed by css-property
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask"
                rel="noreferrer"
                target="_blank"
                tuiLink
            >
                <code>mask</code>
            </a>
            .
        </p>

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
            <progress
                tuiProgressBar
                [max]="max"
                [segments]="segments"
                [size]="size"
                [tuiProgressColorSegments]="computedColors"
                [value]="value"
            ></progress>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[segments]"
                tuiDocAPIItem
                type="number"
                [(value)]="segments"
            >
                A number of visual segments.
                <p>
                    It must be a valid
                    <strong>integer</strong>
                    number between 0 and
                    <code>max</code>
                    .
                </p>
            </tr>
            <tr
                name="[value]"
                tuiDocAPIItem
                type="number"
                [(value)]="value"
            >
                This property specifies how much of the task has been completed.
                <p>
                    Must be a valid
                    <strong>integer</strong>
                    number between 0 and
                    <code>max</code>
                    .
                </p>
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="number"
                [(value)]="max"
            >
                <p>This property describes how much work the task indicated by the progress element requires.</p>
                <p>
                    Must be a valid
                    <strong>positive integer</strong>
                    number. Default is
                    <code>1</code>
                    .
                </p>
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeXS | TuiSizeXXL"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Height of the progress
            </tr>
            <tr
                name="[tuiProgressColorSegments]"
                tuiDocAPIItem
                type="string[]"
                [items]="colorsVariants"
                [(value)]="colors"
            >
                Colors of the progress segments.
                <p>
                    Use CSS-property
                    <code>color</code>
                    to set
                    <strong>single</strong>
                    solid color of progress indicator.
                </p>
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
