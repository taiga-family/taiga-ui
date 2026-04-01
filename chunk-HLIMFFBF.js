import"./chunk-HU6DUUP4.js";var i=`@if (isLanding()) {
    <router-outlet />
} @else {
    <tui-doc-main>
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
                [style.margin-inline-end.rem]="-0.25"
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
            <button
                appSettings
                iconStart="@tui.settings"
                tuiIconButton
                type="button"
            >
                Settings
            </button>
        </div>
        <custom-host ngProjectAs="tuiOverContent" />
    </tui-doc-main>
}
`;export{i as default};
