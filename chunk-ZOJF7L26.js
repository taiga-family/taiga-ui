import"./chunk-LQ6M4NCU.js";var a=`<div class="display">{{ value() || '\u2014' }}</div>

<tui-keypad class="custom">
    @for (digit of digits; track digit) {
        <button
            type="button"
            (click)="append(digit)"
        >
            {{ digit }}
        </button>
    }

    <div></div>

    <button
        type="button"
        (click)="append('0')"
    >
        0
    </button>

    @if (value()) {
        <button
            aria-label="Backspace"
            type="button"
            (click)="backspace()"
            (longtap)="clear()"
        >
            <tui-icon icon="@tui.delete" />
        </button>
    }
</tui-keypad>
`;export{a as default};
