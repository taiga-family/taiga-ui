import"./chunk-HU6DUUP4.js";var s=`<button
    appearance="secondary-destructive"
    size="m"
    tuiButton
    type="button"
>
    <span>
        Pay
        <span [tuiSensitive]="sensitive">1000$</span>
    </span>
</button>
<button
    appearance="flat"
    size="m"
    tuiButton
    type="button"
    class="tui-space_left-2"
>
    <span>
        Pay
        <span [tuiSensitive]="sensitive">1000$</span>
    </span>
</button>

<p>
    <span
        tuiBadge
        [style.background]="'var(--tui-status-positive)'"
        [tuiSensitive]="sensitive"
    >
        12 000$
    </span>
    <span
        appearance="primary"
        tuiBadge
        class="tui-space_left-2"
    >
        <span [tuiSensitive]="sensitive">12 000$</span>
    </span>
    <span
        appearance="accent"
        size="xl"
        tuiBadge
        class="tui-space_left-2"
        [tuiSensitive]="sensitive"
    >
        12 000$
    </span>
</p>

<label tuiLabel>
    <input
        tuiSwitch
        type="checkbox"
        [(ngModel)]="sensitive"
    />
    Hide
</label>
`;export{s as default};
