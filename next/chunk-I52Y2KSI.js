import"./chunk-HU6DUUP4.js";var e=`<a
    href="https://github.com/taiga-family/taiga-ui"
    tuiCell
>
    <div tuiTitle>Notifications</div>
    <tui-badge-notification size="l">3</tui-badge-notification>
    <tui-icon
        tuiTooltip="A cell can be a link"
        (click.prevent)="(0)"
    />
    <div tuiSubtitle>
        Read
        <tui-icon icon="@tui.chevron-right" />
    </div>
</a>

<label tuiCell>
    <div tuiTitle>
        A label
        <div tuiSubtitle>Clicking it will toggle checkbox</div>
    </div>
    <tui-loader />
    <input
        tuiCheckbox
        type="checkbox"
        [(ngModel)]="value"
    />
</label>

<button
    tuiCell
    type="button"
>
    <div tuiTitle>
        <div tuiSubtitle>
            <span [style.color]="'var(--tui-text-positive)'">For sale</span>
            \u2022
            <span>ebay</span>
        </div>
        It can be a button
        <div tuiSubtitle>In stock</div>
    </div>
    <div tuiTitle>
        <div tuiSubtitle>&nbsp;</div>
        $237
        <div tuiSubtitle>321 items</div>
    </div>
</button>

<div tuiCell>
    <div tuiAvatar="@tui.user">
        <img
            alt=""
            src="assets/images/avatar.jpg"
        />
    </div>
    <div tuiTitle>Salary</div>
    <div tuiTitle>
        <span
            [style.color]="'var(--tui-text-positive)'"
            [tuiSensitive]="true"
        >
            Enough
        </span>
        <div tuiSubtitle>Sky's the limit</div>
    </div>
</div>
`;export{e as default};
