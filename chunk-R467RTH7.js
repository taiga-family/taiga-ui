import"./chunk-HU6DUUP4.js";var e=`<section>
    @for (size of sizes; track size) {
        <span
            tuiChip
            [size]="size"
            [style.border-radius.rem]="5"
        >
            Text
        </span>
    }
</section>

<section>
    @for (size of sizes; track size) {
        <span
            iconStart="@tui.bell"
            tuiChip
            [size]="size"
        >
            Single icon
        </span>
    }
</section>

<section>
    @for (size of sizes; track size) {
        <span
            iconEnd="@tui.circle-help"
            iconStart="@tui.bell"
            tuiChip
            [size]="size"
            [style.border-radius.rem]="5"
        >
            Duo icon
        </span>
    }
</section>

<section>
    @for (size of sizes; track size) {
        <span
            tuiChip
            [size]="size"
        >
            @if (size === 'm' || size === 's') {
                <img
                    alt="Avatar"
                    src="assets/images/avatar.jpg"
                    [style.border-radius.rem]="size === 'm' ? 0.25 : 0.5"
                />
            }
            Image
        </span>
    }
</section>

<section>
    @for (size of sizes; track size) {
        <span
            tuiChip
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
        </span>
    }
</section>

<section>
    <span
        size="m"
        tuiChip
    >
        Button
        <button
            iconStart="@tui.x"
            size="s"
            tuiIconButton
            type="button"
        >
            Remove
        </button>
    </span>
    @for (size of sizes | slice: 1; track size) {
        <span
            tuiChip
            [size]="size"
        >
            Button
            <button
                iconStart="@tui.x"
                tuiIconButton
                type="button"
            >
                Remove
            </button>
        </span>
    }
</section>

<section>
    @for (size of sizes; track size) {
        <span
            tuiChip
            [size]="size"
        >
            Badge

            @if (size !== 'xxs') {
                <div
                    appearance="primary"
                    tuiBadge
                    [size]="size === 'm' ? 'm' : 's'"
                >
                    1
                </div>
            }

            <button
                iconStart="@tui.x"
                tuiIconButton
                type="button"
            >
                Remove
            </button>
        </span>
    }
</section>
`;export{e as default};
