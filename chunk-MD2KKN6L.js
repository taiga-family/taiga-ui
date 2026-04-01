import"./chunk-HU6DUUP4.js";var e=`<div tuiNotification>
    Can be attached as host directive:
    <code>hostDirectives: [TuiConnected]</code>
</div>

<div
    appearance="floating"
    tuiCardLarge
    tuiConnected
>
    <h3 tuiTitle="m">Inside a block</h3>
    @for (item of items; track item) {
        <button
            tuiCell
            type="button"
        >
            <div
                appearance="accent"
                [tuiAvatar]="item.icon"
            ></div>
            <span tuiTitle>
                {{ item.title }}
                <span tuiSubtitle>{{ item.subtitle }}</span>
            </span>
        </button>
    }
</div>

<div tuiConnected>
    <label tuiCell>
        <tui-badged-content>
            <tui-icon
                appearance="negative"
                iconStart="@tui.arrow-down-left"
                size="s"
                tuiBadge
                tuiSlot="top"
            />
            <div tuiAvatar="@tui.phone"></div>
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
        <tui-badged-content tuiAccessories>
            <tui-icon
                appearance="positive"
                iconStart="@tui.arrow-up-right"
                size="s"
                tuiBadge
                tuiSlot="top"
            />
            <div tuiAvatar="@tui.phone"></div>
        </tui-badged-content>
        <div tuiTitle>Allow outgoing unusual call that can change your life in an unusual way</div>
        <div tuiAccessories>
            <input
                tuiSwitch
                type="checkbox"
                [(ngModel)]="outgoing"
            />
        </div>
    </label>
    <label tuiCell>
        <tui-badged-content>
            <tui-icon
                appearance="negative"
                iconStart="@tui.arrow-down-left"
                size="s"
                tuiBadge
                tuiSlot="top"
            />
            <div tuiAvatar="@tui.phone"></div>
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
</div>
`;export{e as default};
