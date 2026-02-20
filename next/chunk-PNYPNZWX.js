import"./chunk-HU6DUUP4.js";var t=`<h2
    class="header"
    [class.header_empty]="!heading"
>
    @if (editing) {
        <tui-input-inline>
            Type a heading
            <input
                tuiAutoFocus
                [(ngModel)]="heading"
                (blur)="onBlur()"
                (keydown.enter.prevent)="toggle()"
            />
        </tui-input-inline>
    } @else {
        <span>{{ heading }}</span>
        <button
            appearance="icon"
            iconStart="@tui.pencil"
            size="xs"
            tuiIconButton
            type="button"
            class="tui-space_left-1"
            (click)="toggle()"
        >
            Edit heading
        </button>
    }
</h2>

<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem
    doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus
    tempore voluptates!
</p>
<p>
    Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam
    quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!
</p>
`;export{t as default};
