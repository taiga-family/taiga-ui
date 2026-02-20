import"./chunk-HU6DUUP4.js";var n=`<tui-swipe-actions>
    <div
        appearance="floating"
        tuiCardLarge
        tuiCell
    >
        <div
            appearance="primary"
            tuiAvatar="@tui.dollar-sign"
        ></div>
        <div tuiTitle>
            <strong>{{ 10000 | tuiAmount: 'USD' }}</strong>
            <div tuiSubtitle>Dollar account</div>
        </div>
    </div>

    <button
        iconStart="@tui.eye"
        size="m"
        tuiIconButton
        tuiSwipeAction
        type="button"
    >
        Show
    </button>
    <button
        iconStart="@tui.pencil-line"
        size="m"
        tuiIconButton
        tuiSwipeAction
        type="button"
    >
        Edit
    </button>
    <button
        appearance="secondary"
        iconStart="@tui.share"
        size="m"
        tuiIconButton
        tuiSwipeAction
        type="button"
    >
        Share
    </button>
</tui-swipe-actions>

<tui-swipe-actions>
    <div
        appearance="floating"
        tuiCardLarge
        tuiCell
    >
        <div
            appearance="primary"
            tuiAvatar="@tui.gift"
        ></div>
        <div tuiTitle>
            <strong>{{ 23000 | tuiAmount: 'EUR' }}</strong>
            <div tuiSubtitle>Goal</div>
        </div>
    </div>

    <button
        iconStart="@tui.eye"
        size="m"
        tuiIconButton
        tuiSwipeAction
        type="button"
    >
        Show
    </button>
</tui-swipe-actions>

<tui-swipe-actions
    [style.--tui-action-gap]="16"
    [style.--tui-item-size]="32"
>
    <div
        appearance="floating"
        tuiCardLarge
        tuiCell
    >
        <div
            appearance="primary"
            tuiAvatar="@tui.briefcase"
        ></div>
        <div tuiTitle>
            <strong>{{ 5000 | tuiAmount: 'EUR' }}</strong>
            <div tuiSubtitle>Vacations</div>
        </div>
    </div>

    <button
        iconStart="@tui.eye"
        size="s"
        tuiIconButton
        tuiSwipeAction
        type="button"
    >
        Show
    </button>
    <button
        iconStart="@tui.pencil-line"
        size="s"
        tuiIconButton
        tuiSwipeAction
        type="button"
    >
        Edit
    </button>
    <button
        appearance="secondary"
        iconStart="@tui.share"
        size="s"
        tuiIconButton
        tuiSwipeAction
        type="button"
    >
        Share
    </button>
    <button
        appearance="secondary-destructive"
        iconStart="@tui.trash"
        size="s"
        tuiIconButton
        tuiSwipeAction
        type="button"
    >
        Delete
    </button>
</tui-swipe-actions>
`;export{n as default};
