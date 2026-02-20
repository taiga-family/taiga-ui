import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="ProgressCircle"
    package="KIT"
    path="kit/components/progress/progress-circle"
    type="components"
>
    <ng-template pageTab>
        <dl>
            <dt>
                <code [textContent]="'<tui-progress-circle />'"></code>
            </dt>
            <dd>
                is a component to visually represent the completion of a process or operation (as a partially filled
                circle/ring). It shows how much has been completed and how much remains.
            </dd>
        </dl>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Sizes"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="With label"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="Colors"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />

        <tui-doc-example
            heading="Dynamic color"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
        />

        <tui-doc-example
            heading="Anti-clockwise direction"
            [component]="6 | tuiComponent"
            [content]="6 | tuiExample"
            [description]="antiClockwiseDirectionDescription"
        >
            <ng-template #antiClockwiseDirectionDescription>
                <p>
                    Use power of CSS property
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
                        rel="noreferrer"
                        target="_blank"
                        tuiLink
                    >
                        <code>transform</code>
                    </a>
                    to customize direction and starting point of progress circle.
                </p>

                <p>
                    By default,
                    <code>ProgressCircle</code>
                    has clockwise direction and starts from the top (i.e. it already contains
                    <code>transform: rotate(-90deg)</code>
                    ).
                </p>
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Thickness"
            [component]="7 | tuiComponent"
            [content]="7 | tuiExample"
            [description]="thicknessDescription"
        >
            <ng-template #thicknessDescription>
                Use css-variable
                <code>--tui-thickness</code>
                to customize width of the circle's stroke.
            </ng-template>
        </tui-doc-example>

        <tui-doc-example
            heading="Arc mode"
            [component]="8 | tuiComponent"
            [content]="8 | tuiExample"
            [description]="arcDescription"
        >
            <ng-template #arcDescription>
                Set
                <code>arc</code>
                attribute to transform default circular shape into arc with small bottom open arc sector (gap between
                arc ends).
            </ng-template>
        </tui-doc-example>
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-progress-circle
                [arc]="arc"
                [color]="color"
                [max]="max"
                [size]="size"
                [style.--tui-thickness.px]="thickness"
                [value]="value"
            />
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="[value]"
                tuiDocAPIItem
                type="number"
                [(value)]="value"
            >
                This property specifies how much of the task that has been completed. It must be a valid floating point
                number between 0 and
                <code>max</code>
                , or between 0 and 1 if
                <code>max</code>
                is omitted.
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="number"
                [(value)]="max"
            >
                <p>This property describes how much work the task indicated by the progress element requires.</p>
                <p>
                    The default value is
                    <code>1</code>
                    .
                </p>
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeXXL | TuiSizeXXS"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Size of the circle.
            </tr>
            <tr
                name="[color]"
                tuiDocAPIItem
                type="string"
                [items]="colorVariants"
                [(value)]="color"
            >
                Color of the progress indicator.
                <p>
                    We recommend set solid color via CSS-property
                    <code>color</code>
                    .
                </p>
            </tr>
            <tr
                name="[arc]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="arc"
            >
                Use arc shape with small bottom open arc sector (instead of default circle).
            </tr>

            <tbody>
                <tr>
                    <td colspan="3">
                        <span tuiTitle>
                            <strong>CSS customization</strong>
                        </span>
                    </td>
                </tr>

                <tr
                    name="[style.--tui-thickness.px]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="thickness"
                >
                    Width of the circle's stroke
                </tr>
            </tbody>
        </table>
    </ng-template>
</tui-doc-page>

<svg
    height="0"
    width="0"
>
    <defs>
        <linearGradient gradientTransform="rotate(95)">
            <stop
                offset="0%"
                stop-color="var(--tui-chart-categorical-02)"
            />
            <stop
                offset="45%"
                stop-color="var(--tui-chart-categorical-14) "
            />
            <stop
                offset="100%"
                stop-color="var(--tui-chart-categorical-12)"
            />
        </linearGradient>
    </defs>
</svg>
`;export{o as default};
