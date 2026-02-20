import"./chunk-HU6DUUP4.js";var e=`<div
    appearance="floating"
    tuiCardLarge
>
    <header tuiHeader>
        <h1 tuiTitle>
            Title
            <span tuiSubtitle>Subtitle</span>
        </h1>
    </header>

    <section class="actions">
        @for (_ of '-'.repeat(6); track $index) {
            <div tuiCell="l">
                <div
                    appearance="primary"
                    tuiAvatar="@tui.star"
                ></div>
                <div tuiTitle>
                    Title
                    <div tuiSubtitle>Description</div>
                </div>
            </div>
        }
    </section>

    <footer>
        <button
            appearance="secondary"
            size="m"
            tuiButton
            type="button"
        >
            Label
        </button>
    </footer>
</div>
`;export{e as default};
