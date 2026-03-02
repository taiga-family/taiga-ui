import"./chunk-HU6DUUP4.js";var n=`<header tuiNavigationHeader>
    <label tuiNavigationLogo>
        Custom color
        <input
            tuiSwitch
            type="checkbox"
            [ngModel]="color"
            (ngModelChange)="onColor($event)"
        />
    </label>
    <button
        tuiButton
        tuiChevron
        tuiDropdown="Use TuiThemeColorService to control color"
        tuiDropdownAuto
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
            tuiDropdownAuto
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
    @for (_ of '-'.repeat(10); track $index) {
        <div
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
    }
</main>
`;export{n as default};
