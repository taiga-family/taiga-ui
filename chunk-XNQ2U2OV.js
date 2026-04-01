import"./chunk-HU6DUUP4.js";var e=`<tui-textfield>
    <label tuiLabel>Card number</label>
    <input
        tuiInputCard
        [(ngModel)]="card"
    />
    @if (card === '1234123412341234') {
        <tui-thumbnail-card
            iconStart="@tui.dollar-sign"
            paymentSystem="mastercard"
            size="s"
            [style.background]="'#2b9aff linear-gradient(110deg, transparent 70%, #0780ff 71%, #db028b 100%)'"
        />
    }
</tui-textfield>
`;export{e as default};
