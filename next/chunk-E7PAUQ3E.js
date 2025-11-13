import"./chunk-42JZD6NG.js";var i=`<nav
    tuiTabBar
    class="tabs"
    [(activeItemIndex)]="activeItemIndex"
>
    @for (item of items; track item) {
        <button
            tuiTabBarItem
            type="button"
            [badge]="item.badge"
            [icon]="item.icon"
            (click)="onClick(item)"
        >
            {{ item.text }}
        </button>
    }
</nav>
`;export{i as default};
