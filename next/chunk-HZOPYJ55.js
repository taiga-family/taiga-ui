import"./chunk-HU6DUUP4.js";var u=`<tui-tabs-with-more>
    @for (url of urls; track url) {
        <a
            *tuiItem
            routerLinkActive="active"
            tuiTab
            [routerLink]="url"
        >
            Example {{ $index + 1 }}
        </a>
    }
</tui-tabs-with-more>

<router-outlet />
`;export{u as default};
