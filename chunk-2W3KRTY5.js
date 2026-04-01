import"./chunk-HU6DUUP4.js";var l=`@if (!control.value) {
    <label tuiInputFiles>
        <input
            accept="image/*"
            tuiInputFiles
            [formControl]="control"
        />
    </label>
}

<tui-files class="tui-space_top-1">
    @if (control.value | tuiFileRejected: {accept: 'image/*'} | async; as file) {
        <tui-file
            state="error"
            [file]="file"
            (remove)="removeFile()"
        />
    }

    @if (loadedFiles$ | async; as file) {
        <tui-file
            size="l"
            [file]="file"
            (remove)="removeFile()"
        />
    }

    @if (failedFiles$ | async; as file) {
        <tui-file
            state="error"
            [file]="file"
            (remove)="removeFile()"
        />
    }

    @if (loadingFiles$ | async; as file) {
        <tui-file
            state="loading"
            [file]="file"
            (remove)="removeFile()"
        />
    }
</tui-files>
`;export{l as default};
