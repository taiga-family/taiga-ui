import"./chunk-HU6DUUP4.js";var l=`<tui-files>
    @for (file of files; track file) {
        <tui-file
            state="normal"
            [file]="file"
            [showDelete]="control.enabled"
        />
    }

    @for (file of rejectedFiles; track file) {
        <tui-file
            state="error"
            [file]="file"
            [showDelete]="control.enabled"
        />
    }

    @if (loadingFile && !isE2E) {
        <tui-file
            state="loading"
            [file]="loadingFile"
            [showDelete]="control.enabled"
            (remove)="removeLoading()"
        />
    }
</tui-files>

<h4>With link</h4>
<tui-files>
    <a
        *tuiItem
        rel="noreferrer"
        state="normal"
        target="_blank"
        tuiFile
        [file]="fileWithLink"
        [href]="fileWithLink.src"
        [showDelete]="control.enabled"
    ></a>
</tui-files>

<h4>With deleted state</h4>
<tui-files>
    @for (file of removedFiles; track file) {
        <tui-file
            size="l"
            state="deleted"
            [file]="file"
            [showDelete]="control.enabled"
        >
            <button
                tuiLink
                type="button"
                (click)="restore(file)"
            >
                Restore
            </button>
        </tui-file>
    }
    @for (file of restoredFiles; track file) {
        <tui-file
            size="l"
            state="normal"
            [file]="file"
            [leftContent]="icon"
            [showDelete]="control.enabled"
            (remove)="remove(file)"
        />
    }
</tui-files>

<ng-template #icon>
    <tui-icon src="@tui.file" />
</ng-template>
`;export{l as default};
