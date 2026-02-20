import"./chunk-HU6DUUP4.js";var a=`<span
    appearance="primary"
    tuiChip
    class="fade"
>
    <div tuiFade>Very long value in chip</div>
    <div>{{ 123000 | tuiAmount: 'RUB' }}</div>
</span>

<span
    appearance="accent"
    iconStart="@tui.box"
    tuiChip
>
    <div class="ellipsis">Very long value in chip</div>
</span>

<tui-badged-content>
    <tui-badge-notification
        size="xs"
        tuiSlot="top"
    />
    <span
        appearance="secondary"
        iconStart="@tui.bell"
        tuiChip
    >
        Notifications
    </span>
</tui-badged-content>

<span
    appearance="custom"
    iconEnd="@tui.thumbs-up"
    tuiChip
>
    Customized chip
</span>

<span
    tuiChip
    [appearance]="selected ? 'primary' : 'neutral'"
>
    Toggle chip
    <button
        iconStart="@tui.plus"
        tuiIconButton
        type="button"
        class="toggle"
        [style.transform]="selected ? 'rotate(45deg)' : 'rotate(0)'"
        (click)="selected = !selected"
    >
        Toggle
    </button>
</span>
`;export{a as default};
