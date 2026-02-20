import"./chunk-HU6DUUP4.js";var n=`<h3>Checkbox</h3>
<section>
    @for (_ of '-'.repeat(checked.length); track $index) {
        <label
            appearance=""
            tuiChip
        >
            Checkbox {{ $index + 1 }}
            <input
                appearance="outline-grayscale"
                tuiChip
                type="checkbox"
                [(ngModel)]="checked[$index]"
            />
        </label>
    }
</section>

<h3>Radio</h3>
<section>
    @for (_ of '-'.repeat(3); track $index) {
        <label
            appearance=""
            tuiChip
        >
            Radio {{ $index + 1 }}
            <input
                appearance="outline-grayscale"
                name="radio"
                tuiChip
                type="radio"
                [value]="$index"
            />
        </label>
    }
</section>

<h3>Label outline</h3>
<section>
    @for (_ of '-'.repeat(checked.length); track $index) {
        <label
            appearance="outline-grayscale"
            tuiChip
        >
            <input
                tuiCheckbox
                type="checkbox"
                [(ngModel)]="checked[$index]"
            />
            Label {{ $index + 1 }}
        </label>
    }
</section>

<h3>Label accent</h3>
<section>
    @for (_ of '-'.repeat(checked.length); track $index) {
        <label
            tuiChip
            [appearance]="checked[$index] ? 'accent' : 'neutral'"
        >
            <input
                hidden
                type="checkbox"
                [(ngModel)]="checked[$index]"
            />
            Label {{ $index + 1 }}
        </label>
    }
</section>

<h3>Button</h3>
<section>
    @for (_ of '-'.repeat(3); track $index) {
        <button
            tuiChip
            type="button"
            (click)="onChip($index)"
        >
            Button {{ $index + 1 }}
        </button>
    }
</section>

<section>
    @for (_ of '-'.repeat(3); track $index) {
        <span tuiChip>
            Close button {{ $index + 1 }}
            <button
                iconStart="@tui.x"
                tuiIconButton
                type="button"
                (click.stop)="onX($index)"
            >
                Remove
            </button>
        </span>
    }
</section>

<h3>Input</h3>
<section>
    @for (_ of '-'.repeat(values.length); track $index) {
        <span
            appearance=""
            tuiChip
            [style.color]="'transparent'"
        >
            {{ values[$index] }}
            <input
                tuiChip
                [(ngModel)]="values[$index]"
            />
        </span>
    }
</section>
`;export{n as default};
