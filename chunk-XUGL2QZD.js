import"./chunk-HU6DUUP4.js";var i=`<button
    tuiButton
    type="button"
    (click)="onClick()"
>
    Show dialog
</button>
<ng-template let-observer>
    <tui-app-bar tuiAppBarSize>
        @if (step > 1) {
            <button
                tuiButton
                tuiSlot="start"
                type="button"
                (click)="onStep(-1)"
            >
                Back
            </button>
        }
        <progress
            size="s"
            tuiProgressBar
            [max]="3"
            [style.width.rem]="10"
            [value]="step"
        ></progress>
        <button
            tuiButton
            tuiSlot="end"
            type="button"
            (click)="observer.complete()"
        >
            Close
        </button>
    </tui-app-bar>
    <section [tuiSlides]="direction">
        @switch (step) {
            @case (1) {
                <div>
                    <header>Welcome to the slides demo</header>
                    <p>
                        These wrapping components will be animated upon navigating this modal dialog. This works well on
                        both desktop and mobile. In your own layouts watch out for unwanted scrollbars.
                    </p>
                </div>
            }
            @case (2) {
                <div>
                    <header>Header is optional</header>
                    <section [style.margin]="'0 -1rem'">
                        @for (_ of '-'.repeat(5); track $index) {
                            <div tuiCell>
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
                </div>
            }
            @case (3) {
                <div
                    appearance="floating"
                    tuiCardLarge
                >
                    <header tuiHeader>
                        <h1 tuiTitle>
                            Title
                            <span tuiSubtitle>Subtitle</span>
                        </h1>
                        <aside tuiAccessories>
                            <div
                                appearance="primary"
                                tuiAvatar="@tui.star"
                            ></div>
                        </aside>
                    </header>
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
            }
        }
    </section>
    <footer
        tuiFloatingContainer
        [style.margin-block-start]="'auto'"
    >
        <button
            tuiButton
            type="button"
            (click)="step < 3 ? onStep(1) : observer.complete()"
        >
            {{ step < 3 ? 'Next' : 'OK' }}
        </button>
    </footer>
</ng-template>
`;export{i as default};
