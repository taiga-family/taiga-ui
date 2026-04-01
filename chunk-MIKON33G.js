import"./chunk-HU6DUUP4.js";var i=`<div class="tui-space_bottom-2">With all features</div>

<button
    size="m"
    tuiButton
    type="button"
    class="tui-space_bottom-4"
    (click)="show()"
>
    Show preview
</button>

<ng-template
    #preview
    let-preview
>
    <tui-preview
        [initialScale]="1.0"
        [rotatable]="true"
        (tuiSwipe)="onSwipe($event)"
    >
        <tui-preview-title>{{ titles[index] }}</tui-preview-title>
        <tui-preview-pagination
            [length]="length"
            [(index)]="index"
        />

        <button
            iconStart="@tui.trash"
            tuiIconButton
            tuiPreviewAction
            type="button"
            (click)="delete()"
        >
            Delete
        </button>
        <button
            iconStart="@tui.download"
            tuiIconButton
            tuiPreviewAction
            type="button"
            (click)="download()"
        >
            Download
        </button>
        <button
            iconStart="@tui.x"
            tuiIconButton
            tuiPreviewAction
            type="button"
            (click)="preview.complete()"
        >
            Close
        </button>

        <img
            *polymorpheusOutlet="previewContent as src"
            alt="preview"
            [src]="src"
        />
    </tui-preview>
</ng-template>

<ng-template #contentSample>
    <div class="content">
        <h1>Important document</h1>

        <p>Hello everyone! This is some important document in A4 format, although it is made using html</p>

        <p>
            This shows that the component preview can work with absolutely any content: this way you can show any
            template, image, pdf or even iframe with your favorite site. We will put this content in the center of the
            portal and provide the user with control over it, and we will provide you with convenient levers to change
            it and process actions.
        </p>

        <img
            alt="logo"
            src="https://raw.githubusercontent.com/taiga-family/ng-polymorpheus/main/projects/demo/assets/logo.svg"
            class="polymorpheus"
        />
    </div>
</ng-template>
`;export{i as default};
