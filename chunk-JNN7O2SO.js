import"./chunk-HU6DUUP4.js";var i=`<nav
    tuiTabBar
    [(activeItemIndex)]="activeItemIndex"
>
    @for (item of items; track item) {
        <button
            tuiTabBarItem
            type="button"
            [icon]="item.icon"
        >
            {{ item.text }}
        </button>
    }
</nav>
`;export{i as default};
