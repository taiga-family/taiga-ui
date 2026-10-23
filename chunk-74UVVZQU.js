import"./chunk-LQ6M4NCU.js";var a=`<tui-keypad class="keypad">
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
`;export{a as default};
