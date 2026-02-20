import"./chunk-HU6DUUP4.js";var e=`<h2>Desktop</h2>
<section tuiPlatform="web">
    <div tuiToast>
        <tui-progress-circle
            size="xxs"
            [max]="100"
            [value]="value()"
        />
        Sending to printer
        <button
            size="s"
            tuiButton
            type="button"
            (click)="trigger$.next(0)"
        >
            Restart
        </button>
    </div>
    <div
        tuiTheme="dark"
        tuiToast
        [style.background]="'#575B61'"
    >
        <tui-loader [inheritColor]="true" />
        Updating...
    </div>
</section>

<h2>Mobile</h2>
<section tuiPlatform="ios">
    <div tuiToast>
        <tui-loader />
        Updating...
    </div>
    <div
        iconStart="@tui.circle-check"
        tuiTheme="dark"
        tuiToast
        [style.background]="'var(--tui-text-action)'"
    >
        Added
        <button
            appearance="secondary-grayscale"
            size="s"
            tuiButton
            type="button"
        >
            Label
        </button>
    </div>
</section>
`;export{e as default};
