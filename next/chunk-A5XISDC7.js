import"./chunk-HU6DUUP4.js";var o=`<button
    tuiButton
    type="button"
    (click)="open = true"
>
    Show dialog
</button>
<ng-template
    let-observer
    [(tuiDialog)]="open"
>
    <header tuiHeader>
        <h2 tuiTitle>Let us know</h2>
    </header>
    <form
        tuiForm
        (submit.prevent)="observer.complete()"
    >
        <tui-textfield>
            <label tuiLabel>Your name</label>
            <input
                tuiAutoFocus
                tuiInput
            />
        </tui-textfield>
        <footer>
            <button
                appearance="secondary"
                tuiButton
                type="button"
                (click)="observer.complete()"
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
</ng-template>
`;export{o as default};
