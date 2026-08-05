import"./chunk-HU6DUUP4.js";var n=`<button
    iconStart="@tui.calculator"
    tuiButton
    type="button"
    (click)="open.set(true)"
>
    Open Calculator
</button>

<ng-template
    [tuiPopout]="open()"
    [tuiPopoutOptions]="{pip: true, features: {width: 300, height: 450}}"
    (tuiPopoutChange)="open.set($event)"
>
    <main class="calculator">
        <input
            #input
            inputmode="none"
            readonly
            tuiAutoFocus
            class="input"
            [value]="displayValue()"
            (keydown)="onKeydown($event)"
        />

        <tui-keypad [columns]="4">
            <button
                type="button"
                (click)="onKey('clear')"
            >
                AC
            </button>
            <button
                type="button"
                (click)="onKey('(')"
            >
                (
            </button>
            <button
                type="button"
                (click)="onKey(')')"
            >
                )
            </button>
            <button
                aria-label="Divide"
                type="button"
                (click)="onKey('\xF7')"
            >
                <tui-icon icon="@tui.divide" />
            </button>

            @for (digit of ['7', '8', '9']; track digit) {
                <button
                    type="button"
                    (click)="onKey(digit)"
                >
                    {{ digit }}
                </button>
            }
            <button
                aria-label="Multiply"
                type="button"
                (click)="onKey('\xD7')"
            >
                <tui-icon icon="@tui.x" />
            </button>

            @for (digit of ['4', '5', '6']; track digit) {
                <button
                    type="button"
                    (click)="onKey(digit)"
                >
                    {{ digit }}
                </button>
            }
            <button
                aria-label="Subtract"
                type="button"
                (click)="onKey('-')"
            >
                <tui-icon icon="@tui.minus" />
            </button>

            @for (digit of ['1', '2', '3']; track digit) {
                <button
                    type="button"
                    (click)="onKey(digit)"
                >
                    {{ digit }}
                </button>
            }
            <button
                aria-label="Add"
                type="button"
                (click)="onKey('+')"
            >
                <tui-icon icon="@tui.plus" />
            </button>

            <button
                type="button"
                (click)="onKey('0')"
            >
                0
            </button>
            <button
                type="button"
                (click)="onKey('.')"
            >
                .
            </button>
            <button
                aria-label="Backspace"
                type="button"
                (click)="onKey('backspace')"
                (longtap)="onKey('clear')"
            >
                <tui-icon icon="@tui.delete" />
            </button>
            <button
                aria-label="Equals"
                type="button"
                (click)="onKey('enter')"
            >
                <tui-icon icon="@tui.equal" />
            </button>
        </tui-keypad>
    </main>
</ng-template>
`;export{n as default};
