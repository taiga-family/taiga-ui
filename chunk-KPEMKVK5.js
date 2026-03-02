import"./chunk-HU6DUUP4.js";var o=`<form
    tuiForm="m"
    [formGroup]="form"
>
    <header tuiHeader>
        <hgroup tuiTitle>
            <h3>Contact list</h3>
            <tui-error
                formArrayName="phones"
                [style.margin-block-start.rem]="-0.25"
            />
        </hgroup>
    </header>
    <ng-container
        formArrayName="phones"
        [tuiTextfieldCleaner]="false"
    >
        @for (phone of form.controls.phones.controls; track $index) {
            <label tuiLabel>
                Phone number {{ $index + 1 }}
                <tui-textfield>
                    <input
                        tuiInputPhone
                        [formControlName]="$index"
                    />
                    <button
                        appearance="icon"
                        iconStart="@tui.trash"
                        size="xs"
                        tuiIconButton
                        type="button"
                        (click)="removePhone($index)"
                    >
                        Remove
                    </button>
                </tui-textfield>
            </label>
            <tui-error [formControlName]="$index" />
        }
    </ng-container>
    <footer>
        <button
            size="s"
            tuiButton
            type="button"
            (click)="addPhone()"
        >
            Add a phone number
        </button>
    </footer>
</form>
`;export{o as default};
