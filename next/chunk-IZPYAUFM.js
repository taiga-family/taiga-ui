import"./chunk-HU6DUUP4.js";var o=`<tui-stepper
    [activeItemIndex]="index"
    (activeItemIndexChange)="onStep($event)"
>
    <button tuiStep>Personal details</button>
    <button tuiStep>Shipping address</button>
    <button tuiStep>Payment info</button>
</tui-stepper>
<tui-elastic-container>
    <section [tuiSlides]="direction">
        @for (form of forms; track form; let i = $index) {
            @if (i === index) {
                <form
                    appearance="floating"
                    tuiCardLarge
                    tuiForm
                    [formGroup]="form"
                    [id]="\`form_\${i}\`"
                    (ngSubmit)="onSubmit()"
                >
                    <header tuiHeader>
                        <h2 tuiTitle>
                            Registration form
                            <span tuiSubtitle>Tell us about yourself</span>
                        </h2>
                    </header>
                    @for (control of form.controls | keyvalue; track control; let j = $index) {
                        <tui-textfield>
                            <label tuiLabel>{{ control.key }}</label>
                            <input
                                tuiInput
                                [formControlName]="control.key"
                                [tuiAutoFocus]="!!index && !j"
                            />
                        </tui-textfield>
                    }
                </form>
            }
        }
    </section>
</tui-elastic-container>
<footer>
    <button
        appearance="secondary"
        tuiButton
        type="button"
        [disabled]="!index"
        (click)="index = index - 1"
    >
        Back
    </button>

    <button
        tuiButton
        type="submit"
        [attr.form]="\`form_\${index}\`"
    >
        Next
    </button>
</footer>
`;export{o as default};
