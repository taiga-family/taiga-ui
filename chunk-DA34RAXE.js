import"./chunk-HU6DUUP4.js";var e=`<p>
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
    @for (_ of '-'.repeat(30); track $index) {
        <div tuiCell>
            <div
                appearance="primary"
                tuiAvatar="@tui.star"
            ></div>
            <div tuiTitle>
                Title
                <div tuiSubtitle>Description</div>
            </div>
        </div>
    }

    @if (floating) {
        <footer [tuiFloatingContainer]="secondAction ? '' : 'transparent'">
            <div tuiSlides>
                @if (action) {
                    <button
                        appearance="primary-grayscale"
                        tuiButton
                        type="button"
                    >
                        Add to Apple Wallet
                    </button>
                } @else {
                    <button
                        tuiButton
                        type="button"
                    >
                        Main action
                    </button>
                }
            </div>
            <tui-expand [expanded]="secondAction">
                <button
                    appearance="flat"
                    tuiButton
                    type="button"
                >
                    Secondary action
                </button>
            </tui-expand>
        </footer>
    }
</div>
`;export{e as default};
