import"./chunk-HU6DUUP4.js";var i=`<header tuiNavigationHeader>
    <strong>Taiga UI</strong>
    <hr />
    <tui-textfield (pointerdown.capture.stop)="(0)">
        <input
            tuiSearchHotkey
            [formControl]="control"
            [tuiInputSearch]="search"
            [(tuiInputSearchOpen)]="open"
        />
        <ng-template #search>
            <tui-search-results [results]="results$ | async">
                <tui-search-history [popular]="popular" />
                <ng-template let-item>
                    <a
                        tuiCell
                        [href]="item.href"
                    >
                        <span [tuiAvatar]="item.icon || '@tui.file'"></span>
                        <span tuiTitle>
                            {{ item.title }}
                            <span tuiSubtitle>{{ item.subtitle }}</span>
                        </span>
                    </a>
                </ng-template>
            </tui-search-results>
        </ng-template>
    </tui-textfield>
    Alex Inkin
    <div tuiAvatar="@tui.user">
        <img
            alt=""
            src="https://avatars.githubusercontent.com/u/11832552"
        />
    </div>
</header>
<main tuiNavigationMain>
    <p>
        <button
            size="m"
            tuiButton
            type="button"
            (click)="open = !open"
        >
            Toggle open: {{ open }}
        </button>
    </p>
</main>
`;export{i as default};
