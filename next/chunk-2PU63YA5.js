import"./chunk-B4AJQJMI.js";var o=`<div class="container">
    <tui-textfield>
        <input
            maxlength="5"
            placeholder="0 ... 999 \u20BD"
            postfix=" \u20BD"
            tuiInputNumber
            [formControl]="amountControl"
            [min]="0"
        />

        <tui-icon
            tuiHintDirection="top"
            tuiTooltip="The amount must be less than 1000 \u20BD"
        />
    </tui-textfield>

    <button
        tuiButton
        type="button"
        class="pay-button"
        (click)="payByCard()"
    >
        <div class="icon-group">
            <img
                alt="visa"
                [src]="'@tui.visa' | tuiIcon"
            />
            <img
                alt="maestro"
                [src]="'@tui.maestro' | tuiIcon"
            />
            <img
                alt="mir"
                [src]="'@tui.mir' | tuiIcon"
            />
        </div>
        Pay
    </button>
</div>
`;export{o as default};
