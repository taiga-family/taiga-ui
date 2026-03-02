import"./chunk-HU6DUUP4.js";var u=`<div
    tuiCarouselButtons
    class="wrapper"
>
    <button
        iconStart="@tui.chevron-left"
        tuiIconButton
        type="button"
        (click)="carousel.prev()"
    >
        Previous
    </button>
    <tui-carousel
        #carousel
        class="carousel"
    >
        <div
            *tuiItem
            class="item"
        >
            <h2 class="title">Monty Python and the Holy Grail</h2>
            <p>
                King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy
                Grail, encountering many, very silly obstacles.
            </p>
            <div>
                <button
                    appearance="primary"
                    tuiButton
                    type="button"
                >
                    Buy \${{ 12.99 | tuiAmount: 'RUB' }}
                </button>
                <button
                    tuiButton
                    type="button"
                    class="tui-space_left-2"
                >
                    Rent \${{ 4.99 | tuiAmount: 'RUB' }}
                </button>
            </div>
        </div>
        <div
            *tuiItem
            class="item"
        >
            <tui-loader />
        </div>
        <div
            *tuiItem
            class="item"
            [style.text-align]="'center'"
        >
            <h2 class="title">Failed to load</h2>
            <p>
                <span
                    appearance="negative"
                    tuiAvatar="@tui.x"
                ></span>
            </p>
        </div>
    </tui-carousel>
    <button
        iconStart="@tui.chevron-right"
        tuiIconButton
        type="button"
        (click)="carousel.next()"
    >
        Next
    </button>
</div>
`;export{u as default};
