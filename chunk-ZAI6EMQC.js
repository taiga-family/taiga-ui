import"./chunk-HU6DUUP4.js";var o=`<button
    tuiButton
    type="button"
    (click)="open.set(!open())"
>
    Toggle
</button>

<tui-drawer *tuiPopup="open()">
    <header>
        <h2 tuiHeader="body-l">
            <div tuiTitle>
                <span tuiCaption>Caption\u30FBcaption</span>
                <span>
                    Drawer title
                    <div tuiBadge>Label</div>
                </span>
                <span tuiSubtitle>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.
                </span>
            </div>

            <div tuiAccessories>
                <button
                    iconStart="@tui.search"
                    tuiButton
                    type="button"
                >
                    More info
                </button>
                <button
                    iconStart="@tui.ellipsis"
                    tuiIconButton
                    type="button"
                >
                    Actions
                </button>
                <button
                    appearance="icon"
                    iconStart="@tui.x"
                    tuiIconButton
                    type="button"
                    (click)="open.set(false)"
                >
                    Close
                </button>
            </div>
        </h2>
        <div>
            <button
                tuiButton
                type="button"
            >
                Action 1
            </button>
            <a
                appearance="action"
                href="#"
                tuiButton
            >
                Action 2
            </a>
            <button
                tuiLink
                type="button"
            >
                Action 3
            </button>
        </div>
        <nav tuiNavigationNav>
            <tui-tabs>
                <button
                    tuiTab
                    type="button"
                >
                    Default view
                </button>
                <button
                    tuiTab
                    type="button"
                >
                    Details
                </button>
                <button
                    tuiTab
                    type="button"
                >
                    Followers
                </button>
            </tui-tabs>
            <hr />
            <button
                size="xs"
                tuiButton
                type="button"
            >
                Primary
            </button>
            <button
                appearance="secondary"
                iconStart="@tui.ellipsis"
                size="xs"
                tuiIconButton
                type="button"
            >
                More
            </button>
        </nav>
    </header>
    @for (_ of '-'.repeat(15); track $index) {
        <p>Content</p>
    }
    <footer>
        <button
            size="m"
            tuiButton
            type="button"
            [style.order]="-1"
        >
            Tertiary action
        </button>
        <button
            size="m"
            tuiButton
            type="button"
        >
            Secondary action
        </button>
        <button
            appearance="primary"
            size="m"
            tuiButton
            type="button"
        >
            Primary action
        </button>
    </footer>
</tui-drawer>
`;export{o as default};
