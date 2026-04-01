import"./chunk-HU6DUUP4.js";var o=`<button
    tuiButton
    type="button"
    (click)="step.set(step() || 1)"
>
    Show popover
</button>
<div
    *tuiPopup="!!step()"
    appearance="floating"
    tuiAnimated
    tuiCardLarge="compact"
    class="popover"
>
    @if (step() === 1) {
        <h1 tuiTitle>
            Leave your feedback
            <span tuiSubtitle>It will only take 3 minutes</span>
        </h1>
        <tui-rating [(ngModel)]="rating" />
    }
    @if (step() === 2) {
        <h1 tuiTitle>Why so?</h1>
        <tui-textfield tuiTextfieldSize="m">
            <textarea
                placeholder="Leave a few words"
                tuiAutoFocus
                tuiTextarea
                [max]="3"
                [min]="3"
                [(ngModel)]="comment"
            ></textarea>
        </tui-textfield>
    }
    <button
        appearance="icon"
        iconStart="@tui.x"
        size="xs"
        tuiIconButton
        type="button"
        class="close"
        (click)="close()"
    >
        Close
    </button>
    <footer class="footer">
        @if (step() === 2) {
            <button
                appearance="secondary"
                size="s"
                tuiButton
                type="button"
                (click)="step.set(1)"
            >
                Back
            </button>
        }
        <button
            appearance="primary"
            size="s"
            tuiButton
            type="button"
            (click)="step() === 1 ? step.set(2) : close()"
        >
            {{ step() === 1 ? 'Next' : 'Submit' }}
        </button>
    </footer>
</div>
`;export{o as default};
