import"./chunk-HU6DUUP4.js";var i=`<tui-carousel
    [itemsCount]="3"
    [(index)]="index"
>
    @for (item of items; track $index) {
        <div
            *tuiItem
            class="item"
        >
            <h2 class="title">{{ item.title }}</h2>
            {{ item.content }}
        </div>
    }
</tui-carousel>

<tui-pagination
    [index]="rounded"
    [length]="items.length / itemsCount"
    (indexChange)="onIndex($event)"
/>
`;export{i as default};
