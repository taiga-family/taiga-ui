import"./chunk-HU6DUUP4.js";var i=`<tui-segmented
    size="m"
    [style.margin-block-end.rem]="2"
    [style.max-width]="'fit-content'"
    [(activeItemIndex)]="segmentedIndex"
>
    <button type="button">Stepper</button>
    <button type="button">Tabs</button>
</tui-segmented>

@switch (segmentedIndex) {
    @case (0) {
        <tui-stepper [activeItemIndex]="index()">
            <button
                tuiStep
                [disabled]="index() === 1"
            >
                Common
            </button>
            <button
                tuiStep
                [disabled]="index() === 0"
            >
                Network access
            </button>
        </tui-stepper>
    }
    @case (1) {
        <tui-tabs
            size="m"
            underline="var(--tui-background-accent-opposite-pressed)"
            [activeItemIndex]="index()"
            (activeItemIndexChange)="index.set($event)"
        >
            <button tuiTab>Common</button>
            <button tuiTab>Network access</button>
        </tui-tabs>
    }
}

@switch (index()) {
    @case (0) {
        <form
            appearance="floating"
            tuiCardLarge
            tuiForm="m"
            [cleaner]="false"
            [formGroup]="form"
        >
            <header tuiHeader>
                <h2 tuiTitle>
                    Registration form
                    <span tuiSubtitle>Tell us about yourself</span>
                </h2>
            </header>
            <tui-textfield>
                <label tuiLabel>Name</label>
                <input
                    formControlName="name"
                    placeholder="John Wick"
                    tuiInput
                />
            </tui-textfield>
            <fieldset>
                <legend>Optional features</legend>
                <label tuiLabel>
                    <input
                        checked
                        tuiCheckbox
                        type="checkbox"
                    />
                    Newsletter
                </label>
                <label tuiLabel>
                    <input
                        tuiCheckbox
                        type="checkbox"
                    />
                    Sell your soul
                </label>
            </fieldset>
        </form>
        <footer>
            <button
                appearance="secondary"
                size="m"
                tuiButton
                type="button"
            >
                Cancel
            </button>
            <button
                size="m"
                tuiButton
                type="submit"
                (click)="next()"
            >
                Next
            </button>
        </footer>
    }
    @case (1) {
        <form
            appearance="floating"
            tuiCardLarge
            tuiForm="m"
            [formGroup]="form"
        >
            <header tuiHeader>
                <h2 tuiTitle>
                    Configuration network
                    <span tuiSubtitle>Fill network settings</span>
                </h2>
            </header>
            <tui-textfield>
                <label tuiLabel>IP-address</label>
                <input
                    formControlName="ip"
                    placeholder="192.0.2.1"
                    tuiInput
                />
            </tui-textfield>
        </form>
        <footer>
            <button
                appearance="secondary"
                size="m"
                tuiButton
                type="button"
                (click)="previous()"
            >
                Back
            </button>
            <button
                size="m"
                tuiButton
                type="submit"
            >
                Save
            </button>
        </footer>
    }
}
`;export{i as default};
