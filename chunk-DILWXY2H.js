import"./chunk-HU6DUUP4.js";var e=`<div tuiCell>
    <label tuiProgressLabel>
        <tui-icon
            icon="@tui.smile"
            [style.color]="'var(--tui-background-accent-1)'"
        />
        <tui-progress-circle
            size="s"
            [value]="0.3"
        />
    </label>
    <div tuiTitle>
        <strong>$30 our of $100</strong>
        <div tuiSubtitle>Saving for a Benjamin Franklin portrait</div>
    </div>
    <div tuiTitle>
        <div
            appearance="positive"
            size="s"
            tuiBadge
        >
            +$30
        </div>
        <div tuiSubtitle>&nbsp;</div>
    </div>
</div>

<div tuiCell>
    <tui-avatar-stack>
        <div tuiAvatar="@tui.user">
            <img
                alt=""
                src="assets/images/avatar.jpg"
            />
        </div>
        <div tuiAvatar="@tui.user">
            <img
                alt=""
                src="assets/images/poorly.png"
            />
        </div>
        <div tuiAvatar>+2</div>
    </tui-avatar-stack>
    <div tuiTitle>
        Waterplea
        <div tuiSubtitle>
            <div
                appearance="neutral"
                size="s"
                tuiBadge
            >
                <tui-icon icon="@tui.lock" />
                100 \u20BD
            </div>
            Music
            <tui-icon
                appearance="positive"
                iconStart="@tui.bell"
                size="s"
                tuiBadge
            />
        </div>
    </div>
    <a
        href="https://waterplea.bandcamp.com"
        tuiLink
    >
        Buy
    </a>
</div>

<div tuiCell>
    <input
        tuiCheckbox
        type="checkbox"
        [(ngModel)]="value"
    />
    <tui-thumbnail-card
        paymentSystem="mastercard"
        size="s"
    >
        1234
    </tui-thumbnail-card>
    <div tuiTitle>
        Primary Card
        <div tuiSubtitle>**** **** **** 1234</div>
    </div>
</div>

<div tuiCell>
    <img
        alt="Poster"
        src="https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg"
        [style.border-radius.rem]="0.5"
        [style.width.rem]="3"
    />
    <div tuiTitle>
        <div tuiSubtitle>Ridley Scott, 1982</div>
        Blade Runner
        <div tuiSubtitle>
            A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to
            Earth to find their creator.
        </div>
    </div>
</div>
`;export{e as default};
