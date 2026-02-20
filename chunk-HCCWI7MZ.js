import"./chunk-HU6DUUP4.js";var r=`<form
    tuiForm="m"
    [formGroup]="form"
    (ngSubmit)="onSubmit()"
>
    <label tuiLabel>
        Secret number
        <tui-textfield>
            <input
                formControlName="secret"
                tuiInput
            />
        </tui-textfield>

        <ng-template #secretError>
            Must be
            <strong style="color: var(--tui-text-primary)">10 digits</strong>
            exactly
        </ng-template>
    </label>
    <tui-error
        formControlName="secret"
        [order]="['required', 'secret']"
    />

    <label tuiLabel>
        Enter company name
        <tui-textfield>
            <input
                formControlName="company"
                tuiInput
            />
        </tui-textfield>

        <ng-template #companyError>
            This company is already registered
            <button
                tuiButton
                type="button"
            >
                It is mine
            </button>
        </ng-template>
    </label>
    <tui-error
        formControlName="company"
        [order]="['required', 'inn']"
    />

    <label tuiLabel>
        <input
            formControlName="checkbox"
            size="s"
            tuiCheckbox
            type="checkbox"
        />

        I agree on the conditions
    </label>
    <tui-error formControlName="checkbox" />

    <footer>
        <button
            size="m"
            tuiButton
            type="submit"
        >
            Submit
        </button>
    </footer>
</form>
`;export{r as default};
