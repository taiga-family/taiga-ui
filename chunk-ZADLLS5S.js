import"./chunk-HU6DUUP4.js";var o=`@for (platform of platforms; track $index) {
    <h2>{{ platform === 'web' ? 'Desktop' : 'Mobile' }}</h2>
    <section [tuiPlatform]="platform">
        <button
            tuiToast
            type="button"
        >
            Plain text interactive
        </button>
        <div tuiToast>
            With action
            <button
                tuiButton
                type="button"
            >
                Action
            </button>
        </div>
    </section>
    <section [tuiPlatform]="platform">
        <div
            iconStart="@tui.info"
            tuiToast
        >
            With icon
        </div>
        <div tuiToast>
            <tui-icon
                appearance="accent"
                icon="@tui.box"
                tuiBadge
            />
            With badge
            <button
                appearance="icon"
                iconStart="@tui.x"
                size="xs"
                tuiIconButton
                type="button"
            >
                Close
            </button>
        </div>
    </section>
    <section [tuiPlatform]="platform">
        <div tuiToast>
            <div tuiAvatar="@tui.user">
                <img
                    alt=""
                    src="https://github.com/waterplea.png"
                />
            </div>
            Avatar
        </div>
        <div tuiToast>
            <div tuiAvatar="@tui.user">
                <img
                    alt=""
                    src="https://github.com/marsibarsi.png"
                />
            </div>
            Everything
            <button
                tuiButton
                type="button"
            >
                Action
            </button>
            @if (platform === 'web') {
                <button
                    appearance="icon"
                    iconStart="@tui.x"
                    size="xs"
                    tuiIconButton
                    type="button"
                >
                    Close
                </button>
            }
        </div>
    </section>
    <section [tuiPlatform]="platform">
        <div
            iconStart="@tui.alarm-clock"
            tuiToast
        >
            The text of the notification telling what happened is in three lines because there is a lot of information
            <button
                tuiButton
                type="button"
            >
                Action
            </button>
        </div>
    </section>
}
`;export{o as default};
