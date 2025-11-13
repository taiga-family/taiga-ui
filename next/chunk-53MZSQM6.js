import"./chunk-42JZD6NG.js";var n=`<header tuiNavigationHeader>
    <span tuiNavigationLogo>
        Custom color
        <input
            tuiSwitch
            type="checkbox"
            [ngModel]="color"
            (ngModelChange)="onColor($event)"
        />
    </span>
    <button
        tuiButton
        tuiChevron
        tuiDropdown="Use TuiThemeColorService to control color"
        tuiDropdownOpen
        type="button"
    >
        How to?
    </button>
</header>
<main tuiNavigationMain>
    <nav
        compact
        tuiSubheader
    >
        <a
            iconStart="@tui.chevron-left"
            tuiLink
            [textContent]="'Repositories'"
        ></a>
        /
        <strong tuiFade>Very long repository name</strong>
        <div
            size="xs"
            tuiAvatar="@tui.lock"
        ></div>
        <tui-tabs>
            <a tuiTab>Default view</a>
            <a tuiTab>Contributors</a>
            <a tuiTab>Code</a>
        </tui-tabs>
        <button
            appearance="secondary"
            tuiButton
            type="button"
        >
            Button
        </button>
        <button
            tuiButton
            type="button"
        >
            Button
        </button>
        <button
            appearance="secondary"
            iconStart="@tui.ellipsis"
            tuiDropdownOpen
            tuiIconButton
            type="button"
            [tuiDropdown]="menu"
        >
            More
            <ng-template #menu>
                <tui-data-list>
                    <button
                        tuiOption
                        type="button"
                    >
                        Button
                    </button>
                    <button
                        tuiOption
                        type="button"
                    >
                        Button
                    </button>
                    <button
                        tuiOption
                        type="button"
                    >
                        Button
                    </button>
                </tui-data-list>
            </ng-template>
        </button>
    </nav>
    <div
        *tuiRepeatTimes="let index of 10"
        appearance="floating"
        tuiCardLarge
        tuiHeader
        [style.grid-column]="'span 6'"
    >
        <h2 tuiTitle>
            Some random content
            <span tuiSubtitle>A subtitle</span>
        </h2>
    </div>
</main>
`;export{n as default};
