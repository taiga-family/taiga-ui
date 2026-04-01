import"./chunk-HU6DUUP4.js";var i=`<tui-calendar-range
    [items]="items"
    [value]="value"
    [(item)]="selected"
    (valueChange)="onValue($event)"
/>

@if (isLastVisible) {
    <p>
        <button
            tuiLink
            type="button"
            (click)="reset()"
        >
            Reset
        </button>
    </p>
}

@if (isSelected && !isDefault) {
    <p>
        You are seeing {{ selected }}.
        @if (!isLastVisible) {
            <button
                tuiLink
                type="button"
                (click)="toggle()"
            >
                Switch to {{ opposite }}
            </button>
        }
    </p>
}
`;export{i as default};
