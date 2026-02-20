import"./chunk-HU6DUUP4.js";var o=`<p>
    <button
        size="m"
        tuiButton
        type="button"
        (click)="load$.next()"
    >
        Reload
    </button>
</p>
<nav tuiTabBar>
    @for (item of items$ | async; track item) {
        <button
            tuiTabBarItem
            type="button"
            [icon]="item.icon"
        >
            {{ item.text }}
        </button>
    }
</nav>
`;export{o as default};
