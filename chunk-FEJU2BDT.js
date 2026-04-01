import"./chunk-HU6DUUP4.js";var e=`<label tuiCell>
    <tui-badged-content>
        <tui-icon
            appearance="negative"
            iconStart="@tui.arrow-down-left"
            size="s"
            tuiBadge
            tuiSlot="top"
        />
        <div
            size="s"
            tuiAvatar="@tui.phone"
        ></div>
    </tui-badged-content>
    <div
        tuiTitle
        [style.color]="'var(--tui-text-negative)'"
    >
        Allow incoming
        <div tuiSubtitle>Why would you?</div>
    </div>
    <input
        tuiSwitch
        type="checkbox"
        [(ngModel)]="incoming"
    />
</label>
<label tuiCell>
    <tui-badged-content>
        <tui-icon
            appearance="positive"
            iconStart="@tui.arrow-up-right"
            size="s"
            tuiBadge
            tuiSlot="top"
        />
        <div
            size="s"
            tuiAvatar="@tui.phone"
        ></div>
    </tui-badged-content>
    <div tuiTitle>Allow outgoing</div>
    <input
        tuiSwitch
        type="checkbox"
        [(ngModel)]="outgoing"
    />
</label>
`;export{e as default};
