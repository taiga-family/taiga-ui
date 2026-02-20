import"./chunk-HU6DUUP4.js";var e=`<tui-segmented>
    @for (state of statuses; track state) {
        <button
            type="button"
            (click)="status = state"
        >
            {{ state }}
        </button>
    }
</tui-segmented>

<tui-textfield>
    <label tuiLabel>Card number</label>
    <input
        icon=""
        tuiInputCard
        [disabled]="status === 'disabled'"
        [invalid]="status === 'invalid'"
        [readOnly]="status === 'readOnly'"
        [(ngModel)]="card"
    />
    @if (card.startsWith('1234')) {
        <tui-thumbnail-card
            iconStart="@tui.dollar-sign"
            paymentSystem="visa"
            size="s"
            [style.background]="background"
        />
    }
</tui-textfield>
`;export{e as default};
