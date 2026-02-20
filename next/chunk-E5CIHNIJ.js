import"./chunk-HU6DUUP4.js";var t=`<label
    tuiCardMedium
    class="card"
>
    <img
        alt="google-pay"
        src="assets/taiga-ui/icons/google-pay.svg"
    />
    <div
        tuiFade
        class="cards"
    >
        <tui-thumbnail-card
            iconStart="@tui.lock"
            paymentSystem="mastercard"
            size="m"
        >
            4572
        </tui-thumbnail-card>

        <tui-thumbnail-card
            iconStart="@tui.lock"
            paymentSystem="mir"
            size="m"
            class="mir"
        >
            6733
        </tui-thumbnail-card>

        <tui-thumbnail-card
            paymentSystem="visa"
            size="m"
            class="visa"
        >
            5212
        </tui-thumbnail-card>
    </div>

    <input
        tuiSurfaceLayer
        type="radio"
        class="selected"
        [value]="0"
        [(ngModel)]="value"
    />

    <div
        tuiRipple
        tuiSurfaceLayer
        [style.background-color]="'#fff6c7'"
    ></div>
</label>

<label
    tuiCardMedium
    class="card"
>
    <img
        alt="apple-pay"
        src="assets/taiga-ui/icons/apple-pay.svg"
    />
    <div
        tuiFade
        class="cards"
    >
        <tui-thumbnail-card
            paymentSystem="mir"
            size="m"
            class="mir"
        >
            2222
        </tui-thumbnail-card>
    </div>

    <input
        tuiSurfaceLayer
        type="radio"
        [value]="1"
        [(ngModel)]="value"
    />

    <div
        tuiRipple
        tuiSurfaceLayer
        [style.background-color]="'#d5f6df'"
    ></div>
</label>
`;export{t as default};
