import"./chunk-LQ6M4NCU.js";var e=`<button
    tuiButton
    type="button"
    (click)="open = true"
>
    Show
</button>
<ng-template
    let-scrollTo="scrollTo"
    [tuiSheetDialogOptions]="options"
    [(tuiSheetDialog)]="open"
>
    <p class="buttons">
        @for (stop of stops; track $index) {
            <button
                appearance="secondary"
                size="m"
                tuiButton
                type="button"
                (click)="scrollTo($index)"
            >
                Stop {{ $index + 1 }}
            </button>
        }
        <button
            appearance="secondary"
            size="m"
            tuiButton
            type="button"
            (click)="scrollTo(stops.length)"
        >
            Top
        </button>
    </p>
    @for (paragraph of paragraphs; track $index) {
        <p>{{ paragraph }}</p>
    }
</ng-template>
`;export{e as default};
