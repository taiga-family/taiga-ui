import"./chunk-HU6DUUP4.js";var e=`<button
    disabled
    tuiCell
    type="button"
>
    <div tuiTitle>Disabled cell</div>
    <tui-badge-notification size="l">1</tui-badge-notification>
    <tui-icon
        tuiTooltip="A cell can be a button"
        (click.prevent)="(0)"
    />
    <div tuiSubtitle>Hint enabled</div>
</button>

<label
    tuiAppearance
    tuiAppearanceState="disabled"
    tuiCell
>
    <div tuiTitle>
        A disabled label
        <div tuiSubtitle>Clicking it will not toggle checkbox</div>
    </div>
    <tui-loader />
    <input
        disabled
        tuiCheckbox
        type="checkbox"
        [(ngModel)]="value"
    />
    <tui-icon tuiTooltip="Hint enabled" />
</label>

<tui-loader class="cell">
    <button
        tuiCell
        type="button"
    >
        <div tuiTitle>Disabled cell</div>
        <div
            tuiCellActions
            tuiTheme="dark"
        >
            <button
                appearance="primary-grayscale"
                iconStart="@tui.phone"
                tuiIconButton
                type="button"
            >
                Call me
            </button>
        </div>
        <div tuiTitle>
            Hover over
            <div tuiSubtitle>Put it before the right side</div>
        </div>
    </button>
</tui-loader>
`;export{e as default};
