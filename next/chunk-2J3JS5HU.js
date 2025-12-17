import"./chunk-B4AJQJMI.js";var n=`<button
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
    <tui-textfield class="tui-space_bottom-3">
        <input
            tuiInput
            [ngModel]="value"
            (ngModelChange)="onModelChange($event)"
        />
        <label tuiLabel>Your name</label>
    </tui-textfield>
    <button
        tuiButton
        type="button"
        (click)="context.complete()"
    >
        Submit
    </button>
</ng-template>
`;export{n as default};
