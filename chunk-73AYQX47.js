import"./chunk-HU6DUUP4.js";var i=`<button
    size="m"
    tuiButton
    type="button"
    class="tui-space_bottom-4"
    (click)="open = !open"
>
    Show preview
</button>

<ng-template [(tuiPreviewDialog)]="open">
    <tui-preview>
        <tui-preview-title>{{ titles[index] }}</tui-preview-title>
        <tui-preview-pagination
            [length]="length"
            [(index)]="index"
        />

        <button
            iconStart="@tui.x"
            tuiIconButton
            tuiPreviewAction
            type="button"
            (click)="open = false"
        >
            Close
        </button>

        <img
            *polymorpheusOutlet="content[index] as src"
            alt="preview"
            [src]="src"
        />
    </tui-preview>
</ng-template>
`;export{i as default};
