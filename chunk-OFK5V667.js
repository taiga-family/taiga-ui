import"./chunk-HU6DUUP4.js";var a=`<div class="messages">
    <tui-scrollbar>
        <div tuiMessage>What's up?</div>
        @for (message of messages; track message) {
            <div
                appearance="accent"
                tuiMessage
                class="message"
                [textContent]="message"
            ></div>
        }
    </tui-scrollbar>
    <tui-bottom-sheet>
        <div class="actions">
            <button
                appearance="floating"
                tuiCardLarge
                type="button"
                (click)="onClick('Ok')"
            >
                Ok
            </button>
            <button
                appearance="floating"
                tuiCardLarge
                type="button"
                (click)="onClick('Bye!')"
            >
                Bye!
            </button>
            <button
                appearance="floating"
                tuiCardLarge
                type="button"
                (click)="onClick('Taiga UI is awesome!')"
            >
                Taiga UI is awesome!
            </button>
        </div>
    </tui-bottom-sheet>
</div>
<form
    class="form"
    (ngSubmit)="onSubmit()"
>
    <tui-textfield class="textarea">
        <label tuiLabel>Type your message</label>
        <textarea
            name="message"
            tuiTextarea
            [max]="6"
            [(ngModel)]="value"
            (keydown.control.enter)="onSubmit()"
        ></textarea>
    </tui-textfield>
    <button
        tuiButton
        type="submit"
    >
        Send
    </button>
</form>
`;export{a as default};
