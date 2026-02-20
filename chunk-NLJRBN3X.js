import"./chunk-HU6DUUP4.js";var e=`<button
    tuiSurface
    type="button"
    class="card"
    [style.background-image]="'url(/assets/images/tickets.svg)'"
    [style.color]="'#d45d8c'"
>
    <h3 class="heading">Tickets</h3>
    <div class="content">Concerts, theater, sports and movies</div>
    <div
        appearance="primary"
        size="s"
        tuiBadge
        class="badge"
    >
        20% off
    </div>
</button>
<button
    tuiSurface
    type="button"
    class="card"
    [style.background-image]="'url(/assets/images/gas.svg)'"
    [style.color]="'#7caeff'"
>
    <h3 class="heading">Gas</h3>
    <div
        appearance="primary"
        size="s"
        tuiBadge
        class="badge"
    >
        +2000%
    </div>
</button>

<div
    tuiSurface
    class="restaurant"
>
    <header
        tuiTheme="dark"
        class="header"
    >
        <label tuiTitle>
            <span tuiSubtitle>RESTAURANT</span>
            Eat all you can
        </label>
        <button
            appearance="icon"
            iconStart="@tui.ellipsis"
            size="xs"
            tuiIconButton
            type="button"
        >
            More
        </button>
    </header>
    <footer class="footer">
        <button
            appearance="glass"
            size="m"
            tuiButton
            type="button"
            [style.border-radius.rem]="5"
        >
            Book a table
        </button>
        <button
            appearance="glass"
            iconStart="@tui.heart"
            size="m"
            tuiIconButton
            type="button"
            [style.border-radius.rem]="5"
        >
            Favorite
        </button>
    </footer>
</div>

<div
    tuiSurface
    tuiTheme="dark"
    class="blur"
>
    <div tuiAvatar="@tui.user">
        <img
            alt=""
            src="assets/images/avatar.jpg"
        />
    </div>
    <label tuiLabel="Taiga UI">Alex Inkin</label>
    <button
        appearance="glass"
        iconStart="@tui.mail"
        size="m"
        tuiIconButton
        type="button"
        class="button"
    >
        Message
    </button>
</div>

<div
    appearance="floating"
    tuiCardLarge
    tuiSurface
    class="reviews"
>
    <h3 class="heading">
        Taiga UI reviews
        <button
            tuiLink
            type="button"
            class="link"
        >
            Hide
        </button>
    </h3>
    <tui-scrollbar class="scrollbar">
        <div class="wrapper">
            @for (review of reviews; track review) {
                <div
                    tuiAppearance="neutral"
                    tuiSurface
                    class="review"
                >
                    {{ review.body }}
                    <footer class="footer">
                        <div
                            size="m"
                            tuiAvatar="@tui.user"
                        >
                            <img
                                alt=""
                                src="assets/images/avatar.jpg"
                            />
                        </div>
                        <label tuiTitle>
                            {{ review.name }}
                            <span tuiSubtitle>{{ review.time }}</span>
                        </label>
                    </footer>
                </div>
            }
        </div>
    </tui-scrollbar>
    <button
        appearance="secondary"
        size="m"
        tuiButton
        type="button"
    >
        See all
    </button>
</div>

<div
    tuiSurface
    tuiTheme="dark"
    class="mask"
>
    <h3 class="heading">
        My bank account
        <button
            appearance="secondary"
            iconStart="@tui.pencil"
            size="s"
            tuiIconButton
            type="button"
            class="button"
        >
            Edit name
        </button>
    </h3>
    <span class="sum">{{ 23742 | tuiAmount: 'USD' : 'start' }}</span>
    <footer class="footer">
        <tui-thumbnail-card
            paymentSystem="mastercard"
            [style.background]="'#337'"
        >
            1234
        </tui-thumbnail-card>
        <tui-thumbnail-card
            paymentSystem="visa"
            [style.background]="'#e33'"
        >
            5678
        </tui-thumbnail-card>
        <button
            appearance="secondary"
            iconStart="@tui.plus"
            size="s"
            tuiIconButton
            type="button"
            class="add"
        >
            Add card
        </button>
    </footer>
</div>
`;export{e as default};
