import"./chunk-HU6DUUP4.js";var t=`<div>
    <h3>NgModel</h3>

    <input
        tuiLike="var(--tui-status-negative)"
        type="checkbox"
        [(ngModel)]="liked"
    />

    <p>Liked: {{ liked }}</p>
</div>

<div>
    <h3>Reactive form</h3>

    <form [formGroup]="likeForm">
        <input
            formControlName="liked"
            tuiLike="var(--tui-status-negative)"
            type="checkbox"
        />
    </form>

    <p>Liked: {{ likeForm.value.liked }}</p>
</div>

<button
    size="m"
    tuiButton
    type="button"
    (click)="changeValue()"
>
    Toggle
</button>
`;export{t as default};
