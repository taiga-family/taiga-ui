import"./chunk-42JZD6NG.js";var e=`<button
    size="m"
    tuiButton
    type="button"
    (click)="onClick(content)"
>
    Open
</button>

<ng-template
    #content
    let-context
>
    <tui-input
        class="tui-space_bottom-3"
        [ngModel]="value"
        (ngModelChange)="onModelChange($event)"
    >
        Your name
    </tui-input>
    <button
        tuiButton
        type="button"
        (click)="context.complete()"
    >
        Submit
    </button>
</ng-template>
`;export{e as default};
