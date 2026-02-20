import"./chunk-HU6DUUP4.js";var t=`<tui-carousel
    [draggable]="true"
    [itemsCount]="3"
    [(index)]="index"
>
    @for (item of items; track $index) {
        <img
            *tuiItem
            alt=""
            draggable="false"
            class="item"
            [class.item_active]="$index === index + 1"
            [src]="\`assets/images/\${item}\`"
        />
    }
</tui-carousel>
`;export{t as default};
