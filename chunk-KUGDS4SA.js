import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="ShrinkWrap"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>
            A tight shrink wrapping implementation in modern browsers using progressive enhancement concept, see
            examples below for visual explanation. Requires
            <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations"
                tuiLink
            >
                scroll-driven animations
            </a>
            to work, gracefully ignored in older browsers.
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            />
            <ng-template #description>
                @switch ($index) {
                    @case (0) {
                        Making sure chat messages only span as wide as they have to.
                    }
                    @case (1) {
                        Toasts already have
                        <code>tuiShrinkWrap</code>
                        directive on host.
                    }
                    @case (2) {
                        Any valid CSS size string can be used, including
                        <code>calc</code>
                        , different units, vars and math functions.
                    }
                }
            </ng-template>
        }
    </ng-template>

    <ng-template pageTab>
        <table tuiDocAPI>
            <tr
                name="[tuiShrinkWrap]"
                tuiDocAPIItem
                type="string"
            >
                Max size of the container, 100% by default
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{t as default};
