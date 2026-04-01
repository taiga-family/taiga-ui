import"./chunk-HU6DUUP4.js";var e=`<tui-breadcrumbs>
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
    class="tui-space_top-2"
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
