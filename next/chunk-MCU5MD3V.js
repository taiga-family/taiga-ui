import"./chunk-HU6DUUP4.js";var e=`<label tuiLabel>
    <input
        tuiSwitch
        type="checkbox"
        [(ngModel)]="loading"
    />
    Loading
</label>

<h3>Shimmer</h3>

<section
    appearance="floating"
    tuiCardLarge
>
    <header tuiHeader>
        <hgroup
            tuiTitle
            [tuiShimmer]="loading"
        >
            <h5>You got $237&nbsp;000,42 left</h5>
            <p tuiSubtitle>Where's the money, Lebowski?</p>
        </hgroup>

        <aside tuiAccessories>
            <div
                appearance="primary"
                tuiAvatar="@tui.star"
            ></div>
        </aside>
    </header>
    <tui-avatar-stack [tuiShimmer]="loading">
        @for (avatar of avatars; track $index) {
            <div tuiAvatar="@tui.user">
                <img
                    alt=""
                    [src]="avatar"
                />
            </div>
        }
    </tui-avatar-stack>
    <footer>
        <button
            appearance="secondary"
            size="m"
            tuiButton
            type="button"
        >
            It's down there
        </button>
        <button
            size="m"
            tuiButton
            type="button"
        >
            Take another look
        </button>
    </footer>
</section>

<h3>Skeleton</h3>

<section
    appearance="floating"
    tuiCardLarge
>
    <header tuiHeader>
        <hgroup tuiTitle>
            <h5 [tuiSkeleton]="loading && 5">
                {{ loading ? '' : 'You got $237&nbsp;000,42 left' }}
            </h5>
            <p
                tuiSubtitle
                [tuiSkeleton]="loading && 6"
            >
                {{ loading ? '' : "Where's the money, Lebowski?" }}
            </p>
        </hgroup>

        <aside tuiAccessories>
            <div
                appearance="primary"
                tuiAvatar="@tui.star"
                [tuiSkeleton]="loading"
            ></div>
        </aside>
    </header>
    <tui-avatar-stack>
        @for (avatar of avatars; track avatar) {
            <div
                [tuiAvatar]="avatar"
                [tuiSkeleton]="loading"
            ></div>
        }
    </tui-avatar-stack>
    <footer>
        <button
            appearance="secondary"
            size="m"
            tuiButton
            type="button"
        >
            It's down there
        </button>
        <button
            size="m"
            tuiButton
            type="button"
        >
            Take another look
        </button>
    </footer>
</section>
`;export{e as default};
