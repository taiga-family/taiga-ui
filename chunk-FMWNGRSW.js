import"./chunk-HU6DUUP4.js";var i=`@if (isLanding()) {
    <router-outlet />
} @else {
    <tui-doc-main #main>
        <div
            ngProjectAs="tuiDocHeader"
            class="app-links"
        >
            @if (isChristmas) {
                <img
                    alt="Santa hat"
                    src="assets/images/hat.svg"
                    class="app-christmas"
                />
            }
            @if (!defaultSearchEnabled()) {
                <tui-algolia-search />
            }
            <button
                appearance="flat-grayscale"
                iconStart="@tui.ellipsis"
                size="s"
                tuiDropdownAuto
                tuiIconButton
                type="button"
                class="app-links-dropdown"
                [tuiDropdown]="more"
            >
                More
                <ng-template #more>
                    <tui-data-list size="m">
                        <a
                            iconStart="@tui.arrow-right-left"
                            tuiOption
                            class="app-link-dropdown"
                            (click)="main.changeTextDirection()"
                        >
                            RTL / LTR
                        </a>
                        <a
                            href="https://github.com/taiga-family/taiga-ui"
                            iconStart="@tui.github"
                            rel="noreferrer"
                            target="_blank"
                            tuiOption
                            class="app-link-dropdown"
                        >
                            GitHub
                        </a>
                        <a
                            iconStart="@tui.zap"
                            tuiOption
                            class="app-link-dropdown"
                            [routerLink]="routes.StackblitzStarter"
                        >
                            StackBlitz
                        </a>
                    </tui-data-list>
                </ng-template>
            </button>
            <a
                appearance=""
                href="https://github.com/taiga-family/taiga-ui"
                iconStart="@tui.github"
                rel="noreferrer"
                size="s"
                target="_blank"
                title="Taiga UI source code on GitHub"
                tuiIconButton
                class="app-link"
            >
                GitHub
            </a>
            <a
                appearance=""
                iconStart="@tui.zap"
                size="s"
                title="Taiga UI StackBlitz Starter"
                tuiIconButton
                class="app-link"
                [routerLink]="routes.StackblitzStarter"
            >
                StackBlitz
            </a>
        </div>
        <custom-host ngProjectAs="tuiOverContent" />
    </tui-doc-main>
}
`;export{i as default};
