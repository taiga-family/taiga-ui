import"./chunk-HU6DUUP4.js";var l=`<form
    tuiForm
    [formGroup]="form"
    [style.max-width.rem]="35"
>
    <header tuiHeader>
        <h3 tuiTitle>
            A header
            <span tuiSubtitle>Form with large controls</span>
        </h3>
    </header>

    <tui-textfield>
        <label tuiLabel>Textfield</label>
        <input
            formControlName="nameValue"
            placeholder="Field placeholder"
            tuiInput
        />
        <tui-icon tuiTooltip="A tooltip" />
    </tui-textfield>
    <tui-error formControlName="nameValue" />

    <tui-textfield>
        <label tuiLabel>Input date</label>
        <input
            formControlName="periodValue"
            placeholder="Placeholder"
            tuiInputDate
        />
        <tui-calendar *tuiDropdown />
    </tui-textfield>
    <tui-error formControlName="periodValue" />

    <fieldset>
        <div class="stack">
            <tui-textfield>
                <label tuiLabel>Input password</label>
                <input
                    formControlName="passwordValue"
                    tuiInput
                    type="password"
                />
                <tui-icon tuiPassword />
            </tui-textfield>
            <tui-error formControlName="passwordValue" />
        </div>
        <div class="stack">
            <tui-textfield>
                <label tuiLabel>Input money</label>
                <input
                    formControlName="moneyValue"
                    tuiInputNumber
                    [postfix]="' RUB' | tuiCurrency"
                />
            </tui-textfield>
            <tui-error formControlName="moneyValue" />
        </div>
    </fieldset>

    <tui-textfield tuiTextfieldSize="l">
        <input
            formControlName="quantityValue"
            tuiInputSlider
            [max]="3000000"
            [min]="50000"
        />
        <input
            tuiSlider
            type="range"
        />
    </tui-textfield>
    <div class="ticks-labels">
        <span>from 50 000 \u20BD</span>
        <span>to 3 000 000 \u20BD</span>
    </div>

    <fieldset>
        <div class="stack">
            <tui-textfield
                tuiChevron
                [tuiTextfieldCleaner]="false"
            >
                <label tuiLabel>Choose a person</label>

                <input
                    formControlName="personValue"
                    tuiSelect
                />

                <tui-data-list-wrapper
                    *tuiDropdown
                    [items]="persons"
                />
            </tui-textfield>
            <tui-error formControlName="personValue" />
        </div>
        <div class="stack">
            <tui-textfield>
                <label tuiLabel>Input phone</label>

                <input
                    autocomplete="tel"
                    formControlName="phoneValue"
                    mask="+7 ### ###-##-##"
                    tuiInputPhone
                />
            </tui-textfield>
            <tui-error formControlName="phoneValue" />
        </div>
    </fieldset>
    <div
        tuiGroup
        [collapsed]="true"
    >
        <label tuiBlock>
            Option 1
            <input
                formControlName="radioValue"
                tuiRadio
                type="radio"
                value="with-commission"
                [style.margin-inline-start]="'auto'"
            />
        </label>
        <label tuiBlock>
            Option 2
            <input
                formControlName="radioValue"
                tuiRadio
                type="radio"
                value="without-commission"
                [style.margin-inline-start]="'auto'"
            />
        </label>
    </div>
    <fieldset>
        <label tuiLabel>
            <input
                formControlName="osnoValue"
                tuiCheckbox
                type="checkbox"
            />
            First option
        </label>
        <label tuiLabel>
            <input
                formControlName="usnValue"
                tuiCheckbox
                type="checkbox"
            />
            Easter Egg
        </label>
    </fieldset>
    <fieldset>
        <label tuiLabel>
            <input
                formControlName="eshnValue"
                tuiCheckbox
                type="checkbox"
            />
            Boring option
        </label>
        <label tuiLabel>
            <input
                formControlName="envdValue"
                tuiCheckbox
                type="checkbox"
            />
            Interesting option
        </label>
    </fieldset>

    <footer>
        <button
            tuiButton
            type="submit"
        >
            Submit
        </button>
        <button
            appearance="flat"
            tuiButton
            type="button"
        >
            Cancel
        </button>
    </footer>
</form>
`;export{l as default};
