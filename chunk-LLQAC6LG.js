import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="ProgressBar"
    package="KIT"
    path="kit/components/progress/progress-bar"
    type="components"
>
    <ng-template pageTab>
        <dl>
            <dt>
                <code>tuiProgressBar</code>
            </dt>
            <dd>
                \u2013 attribute component for native html tag
                <code [textContent]="'<progress />'"></code>
                .
            </dd>
        </dl>
        <p>
            <strong>Usage:</strong>
            <code [textContent]="'<progress tuiProgressBar value=\\'40\\' max=\\'100\\'></progress>'"></code>
            .
        </p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Multicolor"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="Sizes"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="With label"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />

        <tui-doc-example
            heading="Stacked progress bars"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
        />

        <tui-doc-example
            heading="Indeterminate"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
            [description]="indeterminateStateDescription"
        >
            <ng-template #indeterminateStateDescription>
                <p>Indeterminate state expresses an unspecified amount of wait time.</p>
                <p>
                    If there is no
                    <code>[value]</code>
                    attribute, the
                    <code>ProgressBar</code>
                    is indeterminate.
                </p>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Customizable corners"
            [component]="7 | tuiComponent"
            [content]="7 | tuiExample"
            [description]="customizableCornersDescription"
        >
            <ng-template #customizableCornersDescription>
                You can toggle off round corners of the progress bar by setting
                <code>border-radius: 0</code>
                .
            </ng-template>
        </tui-doc-example>
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <progress
                tuiProgressBar
                class="api-progress"
                [color]="color"
                [max]="max"
                [size]="size"
                [value]="value"
            ></progress>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[value]"
                tuiDocAPIItem
                type="number"
                [(value)]="value"
            >
                Native attribute
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#attributes"
                    rel="noreferrer"
                    target="_blank"
                    tuiLink
                >
                    value
                </a>
                of
                <code [textContent]="'<progress />'"></code>
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="number"
                [(value)]="max"
            >
                Native attribute
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#attributes"
                    rel="noreferrer"
                    target="_blank"
                    tuiLink
                >
                    max
                </a>
                of
                <code [textContent]="'<progress />'"></code>
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeXS | TuiSizeXXL"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Size of the progress element
            </tr>
            <tr
                name="[color]"
                tuiDocAPIItem
                type="string"
                [items]="colorVariants"
                [(value)]="color"
            >
                Color of the progress indicator
                <p>
                    We recommend set solid color via
                    <code [textContent]="'<progress />'"></code>
                    's CSS-property
                    <code>color</code>
                    (especially, if you support old not-chromium based Edge)
                </p>
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
