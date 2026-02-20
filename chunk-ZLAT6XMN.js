import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Slider"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <div>
            Taiga UI styling of native html tag
            <code [textContent]="'<input type=\\'range\\' />'"></code>
            to choose a value from a limited range
            <p>
                Read more about this input type in
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/range"
                    rel="noreferrer"
                    target="_blank"
                    tuiLink
                >
                    MDN Docs
                </a>
            </p>
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
                            Use css-variable
                            <code>--tui-thumb-size</code>
                            to customize radius of the thumb and track thickness.
                        }
                        @case (1) {
                            Customizing colors of the filled track and thumb
                        }
                        @case (2) {
                            Use mixin
                            <code>tui-slider-ticks-labels</code>
                            to place labels strictly below ticks
                        }
                        @case (3) {
                            Non interactive state
                        }
                        @case (4) {
                            <strong>Key steps</strong>
                            \u2013 anchor points of non-uniform format between control's value and slider's position.

                            <p class="tui-space_bottom-0">
                                When
                                <code>[keySteps]</code>
                                property is enabled,
                                <code>[step]</code>
                                means percentage of total track length.
                            </p>
                        }
                        @case (5) {
                            Use
                            <code>tuiSliderThumbLabel</code>
                            for positioning any content so it slides alongside the thumb.
                        }

                        @case (6) {
                            Vertical orientation can be achieved using CSS transformations.
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="control">
            <ng-template>
                <input
                    tuiSlider
                    type="range"
                    [formControl]="control"
                    [max]="max"
                    [min]="min"
                    [segments]="segments"
                    [step]="step"
                    [style.--tui-thumb-size.px]="thumbSize"
                />
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[disabled]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="disabled"
            >
                Disabled state (use
                <code>formControl.disable()</code>
                )
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="number"
                [(value)]="max"
            >
                Native attribute
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#max"
                    rel="noreferrer"
                    target="_blank"
                    tuiLink
                >
                    max
                </a>
                of
                <code>&lt;input type='range' /&gt;</code>
            </tr>
            <tr
                name="[min]"
                tuiDocAPIItem
                type="number"
                [(value)]="min"
            >
                Native attribute
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#min"
                    rel="noreferrer"
                    target="_blank"
                    tuiLink
                >
                    min
                </a>
                of
                <code>&lt;input type='range' /&gt;</code>
            </tr>
            <tr
                name="[step]"
                tuiDocAPIItem
                type="number"
                [(value)]="step"
            >
                Native attribute
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step"
                    rel="noreferrer"
                    target="_blank"
                    tuiLink
                >
                    step
                </a>
                of
                <code>&lt;input type='range' /&gt;</code>
            </tr>
            <tr
                name="[segments]"
                tuiDocAPIItem
                type="number[] | number"
                [items]="segmentsVariants"
                [(value)]="segments"
            >
                <p>
                    A number of visual segments or an array, in which every number - is ratio of slider's track length
                    in range (0; 1) where to put tick
                </p>
                (use
                <code>1</code>
                for no ticks)
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
                    name="[style.--tui-thumb-size.px]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="thumbSize"
                >
                    Size of thumb
                </tr>
            </tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
