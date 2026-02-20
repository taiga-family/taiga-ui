import"./chunk-HU6DUUP4.js";var o=`<button
    tuiButton
    type="button"
    (click)="onClick(content)"
>
    Show dialog
</button>

<ng-template
    #content
    let-context
>
    <form tuiForm>
        <tui-textfield>
            <label tuiLabel>Your name</label>
            <input
                name="name"
                placeholder="John Wick"
                tuiAutoFocus
                tuiInput
                [ngModel]="value"
                (ngModelChange)="onModelChange($event)"
            />
        </tui-textfield>
        <footer>
            <button
                tuiButton
                type="submit"
                (click.prevent)="context.complete()"
            >
                Submit
            </button>
        </footer>
    </form>
</ng-template>
`;export{o as default};
