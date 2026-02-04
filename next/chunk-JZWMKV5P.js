import"./chunk-B4AJQJMI.js";var i=`<tui-doc-page
    header="Fade"
    package="KIT"
    type="directives"
>
    <ng-template pageTab>
        <p>Directive that uses masking to fade out overflown content</p>

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
                        Single scrollable line with automatic fade on the edges.
                    }
                    @case (1) {
                        Fade on the last line. When applying custom line height, keep in mind that accessible font
                        scaling can be applied. You can account for it using
                        <code>--tui-font-offset</code>
                        CSS variable or
                        <code>TUI_FONT_OFFSET</code>
                        signal DI token.
                    }
                    @case (2) {
                        Scrollable vertical container with automatic fade on the edges.
                    }
                    @case (3) {
                        In multiline mode you can use hyphen CSS rule to avoid long words wrapping to the next line
                        entirely which can cause fade effect to not be visible at all due to last visible line becoming
                        too short.
                    }
                }
            </ng-template>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <div
                tuiFade
                class="fade"
                [tuiFadeHeight]="lineHeight"
                [tuiFadeOffset]="offset"
                [tuiFadeSize]="size"
            >
                I am a very long text with
                <code>white-space: nowrap</code>
                that fades
            </div>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiFade]"
                tuiDocAPIItem
                type="TuiOrientation"
            >
                Orientation of the fade
            </tr>
            <tr
                name="[tuiFadeHeight]"
                tuiDocAPIItem
                type="string"
                [(value)]="lineHeight"
            >
                Line height (required for multiline text fade)
            </tr>
            <tr
                name="[tuiFadeOffset]"
                tuiDocAPIItem
                type="string"
                [(value)]="offset"
            >
                Offset from the edge for the fade to start
            </tr>
            <tr
                name="[tuiFadeSize]"
                tuiDocAPIItem
                type="string"
                [(value)]="size"
            >
                Size of the fade
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
