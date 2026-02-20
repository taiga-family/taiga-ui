import"./chunk-HU6DUUP4.js";var i=`<form
    appearance="floating"
    tuiCardLarge
    tuiForm="m"
    [formGroup]="form"
    [style.max-width.rem]="32"
>
    <header tuiHeader>
        <h2 tuiTitle>
            Registration form
            <span tuiSubtitle>Tell us about yourself</span>
        </h2>
        <span tuiAccessories>
            <tui-segmented>
                <label>
                    <input
                        formControlName="basic"
                        type="radio"
                        [value]="true"
                    />
                    Brief
                </label>
                <label>
                    <input
                        formControlName="basic"
                        type="radio"
                        [value]="false"
                    />
                    Detailed
                </label>
            </tui-segmented>
        </span>
    </header>
    <div
        appearance="warning"
        tuiNotification
    >
        <h3 tuiTitle>
            Authenticity required
            <span tuiSubtitle>Please be honest and use your real data</span>
        </h3>
    </div>
    <tui-textfield>
        <label tuiLabel>Name</label>
        <input
            formControlName="name"
            placeholder="John Wick"
            tuiInput
        />
    </tui-textfield>
    <tui-error formControlName="name" />
    @if (!form.controls.basic.value) {
        <tui-textfield>
            <label tuiLabel>Email</label>
            <input
                formControlName="email"
                placeholder="john@wick.com"
                tuiInput
                type="email"
            />
        </tui-textfield>
        <label tuiLabel>
            <input
                formControlName="subscribe"
                tuiSwitch
                type="checkbox"
            />
            Subscribe for newsletter
            <tui-icon tuiTooltip="We will not send you spam, pinky promise!" />
        </label>
    }
    <footer>
        <button
            appearance="secondary"
            tuiButton
            type="button"
        >
            Cancel
        </button>
        <button
            tuiButton
            type="submit"
        >
            Submit
        </button>
    </footer>
</form>
`;export{i as default};
