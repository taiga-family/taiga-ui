import"./chunk-HU6DUUP4.js";var i=`<div
    appearance="floating"
    tuiCardLarge
>
    <header tuiHeader>
        <h1 tuiTitle>
            Title
            <span tuiSubtitle>Subtitle</span>
        </h1>
    </header>

    <section>
        @for (_ of '-'.repeat(3); track $index) {
            <div
                appearance="neutral"
                tuiCardMedium
            >
                <tui-icon
                    icon="@tui.square-plus"
                    class="plus"
                />

                <h2 tuiTitle>
                    Title
                    <span tuiSubtitle>Subtitle</span>
                </h2>
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
`;export{i as default};
