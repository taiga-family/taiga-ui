import"./chunk-42JZD6NG.js";var i=`<div>
    <p class="tui-text_body-xl">NgModel</p>

    <input
        tuiLike="var(--tui-status-negative)"
        type="checkbox"
        [(ngModel)]="liked"
    />

    <p class="tui-text_body-m-2">Liked: {{ liked }}</p>
</div>

<div>
    <p class="tui-text_body-xl">Reactive form</p>

    <form [formGroup]="likeForm">
        <input
            formControlName="liked"
            tuiLike="var(--tui-status-negative)"
            type="checkbox"
        />
    </form>

    <p class="tui-text_body-m-2">Liked: {{ likeForm.value.liked }}</p>
</div>

<button
    size="m"
    tuiButton
    type="button"
    [style.width.%]="100"
    (click)="changeValue()"
>
    Toggle
</button>
`;export{i as default};
