import"./chunk-LQ6M4NCU.js";var a=`<tui-doc-page
    header="Keypad"
    package="ADDON-MOBILE"
    type="components"
>
    <ng-template pageTab>
        <p>
            <code>TuiKeypad</code>
            is an on-screen grid primitive for touch input. It only lays out and styles the keys \u2014 you project your own
            native
            <code>&lt;button&gt;</code>
            or
            <code>&lt;a&gt;</code>
            elements and wire clicks, labels and disabled state yourself, so the pad can be anything: a numeric pad, a
            shuffled PIN terminal, a calculator or a custom chooser.
        </p>
        <p>
            Each key stays a real element, so
            <code>(click)</code>
            ,
            <code>aria-label</code>
            ,
            <code>disabled</code>
            and
            <code>href</code>
            all work as usual. Each key updates your own state on
            <code>(click)</code>
            \u2014 display the running value however you like (the examples keep it in a signal shown in a
            <code>&lt;div&gt;</code>
            ).
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [fullsize]="$index === 3"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index) {
                        @case (0) {
                            A numeric pad \u2014 digits, clear and backspace wired via
                            <code>(click)</code>
                            .
                        }
                        @case (1) {
                            A custom-font pad with a conditional backspace icon, driving a display.
                        }
                        @case (2) {
                            Digit positions are randomized at runtime \u2014 the arbitrary, dynamic content a PIN terminal
                            needs.
                        }
                        @case (3) {
                            The keypad expands while the amount field is focused, inside a sheet.
                        }
                        @case (4) {
                            A calculator in a picture-in-picture window \u2014 icon keys and hardware-keyboard mapping.
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [sticky]="false">
            <tui-keypad [columns]="columns">
                @for (digit of digits; track digit) {
                    <button
                        type="button"
                        (click)="append(digit)"
                    >
                        {{ digit }}
                    </button>
                }

                <button
                    type="button"
                    (click)="clear()"
                >
                    C
                </button>

                <button
                    type="button"
                    (click)="append('0')"
                >
                    0
                </button>

                <button
                    aria-label="Backspace"
                    type="button"
                    (click)="backspace()"
                    (longtap)="clear()"
                >
                    <tui-icon icon="@tui.delete" />
                </button>
            </tui-keypad>

            <p>Value: {{ value() || '\u2014' }}</p>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[columns]"
                tuiDocAPIItem
                type="number"
                [items]="columnsVariants"
                [(value)]="columns"
            >
                Number of grid columns
            </tr>
        </table>

        <p>
            Populate the pad by projecting native
            <code>&lt;button&gt;</code>
            or
            <code>&lt;a&gt;</code>
            elements. Each carries its own content, click handler,
            <code>aria-label</code>
            and disabled state \u2014 there are no key-behavior or icon inputs on the component itself.
        </p>
    </ng-template>
</tui-doc-page>
`;export{a as default};
