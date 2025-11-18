import"./chunk-42JZD6NG.js";var a=`<p>
    <label tuiLabel>
        <input
            tuiSwitch
            type="checkbox"
            [(ngModel)]="floating"
        />
        Floating visibility
    </label>
</p>
<p>
    <label tuiLabel>
        <input
            tuiSwitch
            type="checkbox"
            [(ngModel)]="secondAction"
        />
        Second action visibility
    </label>
</p>
<p>
    <label tuiLabel>
        <input
            tuiSwitch
            type="checkbox"
            [(ngModel)]="action"
        />
        Primary action
    </label>
</p>

<div class="content">
    <div
        *tuiRepeatTimes="let i of 30"
        tuiCell
    >
        <div
            appearance="primary"
            tuiAvatar="@tui.star"
        ></div>
        <div tuiTitle>
            Title
            <div tuiSubtitle>Description</div>
        </div>
    </div>

    @if (floating) {
        <footer
            @tuiSlideInTop
            [tuiFloatingContainer]="secondAction ? '' : 'transparent'"
        >
            @if (!action) {
                <button
                    tuiButton
                    type="button"
                    [@tuiCrossFade]="{value: '', params: {duration: 0.25}}"
                >
                    Main action
                </button>
            }
            @if (action) {
                <button
                    appearance="primary-grayscale"
                    tuiButton
                    type="button"
                    [@tuiCrossFade]="{value: '', params: {duration: 0.25}}"
                >
                    Add to Apple Wallet
                </button>
            }
            @if (secondAction) {
                <button
                    appearance="flat"
                    tuiButton
                    type="button"
                    @tuiHeightCollapse
                >
                    Secondary action
                </button>
            }
        </footer>
    }
</div>
`;export{a as default};
