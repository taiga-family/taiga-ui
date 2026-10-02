import"./chunk-LQ6M4NCU.js";var t=`<form (ngSubmit)="save()">
    <h4>
        @if (editing()) {
            <tui-input-inline>
                <span>Type a heading</span>
                <input
                    name="heading"
                    tuiAutoFocus
                    [ngModelOptions]="{updateOn: 'submit'}"
                    [(ngModel)]="heading"
                    (blur)="editing.set(false)"
                    (keydown.esc.prevent)="editing.set(false)"
                />
            </tui-input-inline>
            <button
                appearance="action"
                iconStart="@tui.check"
                size="xs"
                tuiIconButton
                type="submit"
                (pointerdown.prevent)="(0)"
            >
                Save
            </button>
        } @else {
            {{ heading() }}
            <button
                appearance="icon"
                iconStart="@tui.pencil"
                size="xs"
                tuiIconButton
                type="button"
                (click)="editing.set(true)"
            >
                Edit heading
            </button>
        }
    </h4>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos
        dolorem doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis
        repellendus tempore voluptates!
    </p>
    <p>
        Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia
        quam quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!
    </p>
</form>
`;export{t as default};
