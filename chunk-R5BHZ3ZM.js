import"./chunk-HU6DUUP4.js";var i=`<!-- Ignore this part, it is only here to position drawer inside the example block -->
<div class="custom-portal">
    <ng-container #vcr />
</div>
<header
    tuiNavigationHeader
    tuiTheme="light"
>
    <button
        title="Menu"
        tuiIconButton
        tuiNavigationDrawer
        type="button"
    >
        <div
            tuiTheme="light"
            class="drawer"
            [style.padding.rem]="0.5"
        >
            <span tuiTitle>
                Drawer content
                <span tuiSubtitle>Arbitrary content</span>
            </span>
        </div>
    </button>
</header>
<div [style.display]="'flex'">
    <aside
        tuiTheme="light"
        [style.height.rem]="27"
        [tuiNavigationAside]="true"
    >
        <header>
            <button
                iconStart="@tui.home"
                tuiAsideItem
                type="button"
            >
                <span tuiFade>A very very long product name</span>
            </button>
        </header>
        <button
            iconStart="@tui.search"
            tuiAsideItem
            type="button"
        >
            Search
        </button>
        <a
            iconStart="@tui.users"
            tuiAsideItem
        >
            Groups
        </a>
        <tui-aside-group [(open)]="open">
            <button
                iconStart="@tui.settings"
                tuiAsideItem
                tuiChevron
                type="button"
            >
                Settings
                <ng-template>
                    <button
                        tuiAsideItem
                        type="button"
                        (click)="open = false"
                    >
                        Account
                    </button>
                    <button
                        tuiAsideItem
                        type="button"
                        (click)="open = false"
                    >
                        Notifications
                    </button>
                    <button
                        tuiAsideItem
                        type="button"
                        (click)="open = false"
                    >
                        Privacy
                    </button>
                </ng-template>
            </button>
        </tui-aside-group>
        <button
            iconStart="@tui.heart"
            tuiAsideItem
            type="button"
        >
            <span tuiFade>By default ellipsis is used but you can use fade too</span>
        </button>
        <hr />
        <button
            appearance="accent"
            iconStart="@tui.plus"
            tuiAsideItem
            type="button"
        >
            Add
        </button>
        <footer>
            <button
                iconStart="@tui.star"
                tuiAsideItem
                type="button"
            >
                Favorites
            </button>
        </footer>
    </aside>
    <main tuiNavigationMain>
        @for (_ of '-'.repeat(10); track $index) {
            <div
                appearance="floating"
                tuiCardLarge
                tuiHeader
            >
                <h2 tuiTitle>
                    Some random content
                    <span tuiSubtitle>A subtitle</span>
                </h2>
            </div>
        }
    </main>
</div>
`;export{i as default};
