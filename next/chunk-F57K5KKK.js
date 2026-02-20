import"./chunk-HU6DUUP4.js";var e=`<tui-swipe-actions [style.--tui-actions-padding.rem]="1">
    <div
        tuiSurface
        class="blur"
    >
        <div tuiAvatar="@tui.user">
            <img
                alt=""
                src="assets/images/avatar.jpg"
            />
        </div>
        <h3 tuiTitle="m">Alex Inkin</h3>
        <button
            appearance="glass"
            iconStart="@tui.mail"
            size="m"
            tuiIconButton
            type="button"
            class="button"
        >
            Message
        </button>
    </div>

    <input
        tuiSwipeAction
        tuiSwitch
        type="checkbox"
        [(ngModel)]="checkbox"
    />
    <button
        appearance="secondary-destructive"
        iconStart="@tui.trash"
        size="m"
        tuiIconButton
        tuiSwipeAction
        type="button"
        [style.borderRadius.%]="100"
    >
        Trash
    </button>
</tui-swipe-actions>
`;export{e as default};
