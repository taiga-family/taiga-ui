import"./chunk-42JZD6NG.js";var e=`<section>
    @for (size of sizes; track size) {
        <tui-chip
            [size]="size"
            [style.border-radius.rem]="5"
        >
            Text
        </tui-chip>
    }
</section>

<section>
    @for (size of sizes; track size) {
        <tui-chip
            iconStart="@tui.bell"
            [size]="size"
        >
            Single icon
        </tui-chip>
    }
</section>

<section>
    @for (size of sizes; track size) {
        <tui-chip
            iconEnd="@tui.circle-help"
            iconStart="@tui.bell"
            [size]="size"
            [style.border-radius.rem]="5"
        >
            Duo icon
        </tui-chip>
    }
</section>

<section>
    @for (size of sizes; track size) {
        <tui-chip [size]="size">
            @if (size === 'm' || size === 's') {
                <img
                    alt="Avatar"
                    src="assets/images/avatar.jpg"
                    [style.border-radius.rem]="size === 'm' ? 0.25 : 0.5"
                />
            }
            Image
        </tui-chip>
    }
</section>

<section>
    @for (size of sizes; track size) {
        <tui-chip
            [size]="size"
            [style.border-radius.rem]="5"
        >
            @if (size === 'm' || size === 's') {
                <div
                    tuiAvatar="@tui.user"
                    [round]="true"
                >
                    <img
                        alt=""
                        src="assets/images/avatar.jpg"
                    />
                </div>
            }
            Avatar
        </tui-chip>
    }
</section>

<section>
    <tui-chip size="m">
        Button
        <button
            iconStart="@tui.x"
            size="s"
            tuiIconButton
            type="button"
        >
            Remove
        </button>
    </tui-chip>
    @for (size of sizes | slice: 1; track size) {
        <tui-chip [size]="size">
            Button
            <button
                iconStart="@tui.x"
                tuiIconButton
                type="button"
            >
                Remove
            </button>
        </tui-chip>
    }
</section>

<section>
    @for (size of sizes; track size) {
        <tui-chip [size]="size">
            Badge

            @if (size !== 'xxs') {
                <tui-badge
                    appearance="primary"
                    [size]="size === 'm' ? 'm' : 's'"
                >
                    1
                </tui-badge>
            }

            <button
                iconStart="@tui.x"
                tuiIconButton
                type="button"
            >
                Remove
            </button>
        </tui-chip>
    }
</section>
`;export{e as default};
