import"./chunk-HU6DUUP4.js";var e=`<tui-carousel
    [duration]="4000"
    [(index)]="index"
>
    @for (item of items; track $index) {
        <div
            *tuiItem
            class="item"
        >
            <h2 class="title">{{ item }}</h2>
            <!-- TODO: update documentation here -->
            <a
                tuiButton
                [attr.href]="\`https://en.wikipedia.org/wiki/\${item}\`"
            >
                Wiki
            </a>
        </div>
    }
</tui-carousel>

<tui-pager
    [count]="items.length"
    [index]="index"
/>
`;export{e as default};
