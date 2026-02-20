import"./chunk-HU6DUUP4.js";var i=`<label tuiInputFiles>
    <input
        #validator="tuiInputFilesValidator"
        accept="image/*"
        tuiInputFiles
        [formControl]="control"
        [multiple]="true"
        (reject)="onReject($event)"
    />
</label>

<tui-files class="tui-space_top-1">
    @for (file of accepted$ | async; track file) {
        <tui-file
            [file]="file"
            (remove)="onRemove(file)"
        />
    }

    @for (file of rejected; track file) {
        <tui-file
            state="error"
            [file]="(file | tuiFileRejected: validator | async) || file"
            (remove)="onRemove(file)"
        />
    }
</tui-files>

<tui-error
    [formControl]="control"
    [order]="['maxLength']"
/>
`;export{i as default};
