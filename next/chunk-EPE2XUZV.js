import"./chunk-HU6DUUP4.js";var e=`<tui-carousel
    [draggable]="true"
    [itemsCount]="1"
    [(index)]="index"
    (shift)="opacity = $event"
>
    @for (item of items; track item) {
        <div
            *tuiItem
            tuiCardMedium
            class="card"
            [style.background]="item.gradient"
        >
            <h2 tuiTitle>
                BANK
                <span tuiSubtitle>{{ item.title }}</span>
            </h2>
            <div
                tuiBadge
                class="money"
            >
                <tui-icon icon="@tui.wallet" />
                {{ item.content }}
            </div>
        </div>
    }
</tui-carousel>

<tui-pager
    [count]="items.length"
    [index]="index"
/>

<div
    tuiButtonGroup
    [style.background-color]="items[index]?.color"
>
    <tui-elastic-container [style.opacity]="opacity * 2">
        @if (index === 0) {
            <button type="button">
                <tui-icon icon="@tui.circle-plus" />
                Create a payment
            </button>
            <button type="button">
                <tui-icon icon="@tui.circle-plus" />
                Pay the bill
            </button>
            <button type="button">
                <tui-icon icon="@tui.circle-plus" />
                Remove from favorites
            </button>
        }

        @if (index === 1) {
            <button type="button">
                <tui-icon icon="@tui.circle-plus" />
                Remove from favorites
            </button>
        }

        @if (index === 2) {
            <button type="button">
                <tui-icon icon="@tui.circle-plus" />
                Create a payment
            </button>
            <button type="button">
                <tui-icon icon="@tui.circle-plus" />
                Remove from favorites
            </button>
        }
    </tui-elastic-container>
</div>
`;export{e as default};
