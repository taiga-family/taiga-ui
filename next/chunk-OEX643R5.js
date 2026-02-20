import"./chunk-HU6DUUP4.js";var o=`<label tuiLabel>
    <input
        tuiSwitch
        type="checkbox"
        [(ngModel)]="enabled"
    />
    Show standalone error
</label>
<p>
    <tui-error [error]="error" />
</p>
<form
    tuiForm="m"
    [formGroup]="form"
>
    <label tuiLabel>
        Type the ultimate answer to the Question of Life, the Universe
        <tui-textfield>
            <input
                formControlName="answer"
                placeholder="and Everything"
                tuiInput
            />
        </tui-textfield>
    </label>
    <tui-error formControlName="answer" />

    <label tuiLabel>
        Set a password
        <tui-textfield>
            <input
                formControlName="password"
                placeholder="Latin letters only"
                tuiInput
            />
        </tui-textfield>
    </label>
    <tui-error formControlName="password" />

    <div>
        If you want to show a validation message as soon as a user starts typing, subscribe on form value changes and
        call
        <code>markAsTouched</code>
        on control on first value change.
    </div>

    <div>Below is an error for the entire form:</div>

    <tui-error [formGroup]="form" />
</form>
`;export{o as default};
