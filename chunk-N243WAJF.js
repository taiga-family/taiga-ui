import"./chunk-LQ6M4NCU.js";var e=`<tui-breadcrumbs>
    @for (item of items; track item) {
        <a
            *tuiItem
            tuiLink
            [routerLink]="item.routerLink"
        >
            {{ item.caption }}
        </a>
    }
</tui-breadcrumbs>

<tui-breadcrumbs
    size="l"
    class="large-breadcrumbs"
>
    @for (item of items; track item) {
        <a
            *tuiItem
            tuiLink
            [routerLink]="item.routerLink"
        >
            {{ item.caption }}
        </a>
    }
</tui-breadcrumbs>
`;export{e as default};
