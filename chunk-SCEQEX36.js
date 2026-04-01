import"./chunk-HU6DUUP4.js";var o=`<p
    tuiDropdownContext
    [tuiDropdown]="reportForm"
>
    Some text with a mistake. Right-click it.
</p>

<p
    tuiDropdownContext
    [tuiDropdown]="reportForm"
>
    Another text
</p>

<ng-template
    #reportForm
    let-close
>
    <form
        class="container"
        [formGroup]="form"
    >
        <tui-textfield>
            <label tuiLabel>Have you found a mistake?</label>
            <textarea
                formControlName="reportText"
                tuiTextarea
                [max]="3"
                [min]="3"
            ></textarea>
        </tui-textfield>

        <button
            tuiButton
            type="button"
            class="button"
            (click)="report(); close()"
        >
            SEND IT
        </button>
    </form>
</ng-template>
`;export{o as default};
