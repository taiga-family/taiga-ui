import"./chunk-HU6DUUP4.js";var l=`<label tuiInputFiles>
    <input
        #validator="tuiInputFilesValidator"
        accept="image/*"
        tuiInputFiles
        [multiple]="true"
        [ngModel]="files"
        (ngModelChange)="onChange($event)"
        (reject)="onReject($event)"
    />
</label>

<tui-files class="tui-space_top-1">
    @for (file of rejected; track file) {
        <tui-file
            state="error"
            [file]="(file | tuiFileRejected: validator | async) || file"
            (remove)="onRemove(file)"
        />
    }
    @for (file of files; track file) {
        <tui-file
            state="normal"
            [file]="file"
            (remove)="onRemove(file)"
        />
    }
</tui-files>
`;export{l as default};
