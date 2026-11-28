import"./chunk-LQ6M4NCU.js";var l=`@if (!control.value) {
    <label tuiInputFiles>
        <input
            accept="image/*"
            capture="user"
            title="Choose files (no limits)"
            tuiInputFiles
            [formControl]="control"
        />
    </label>
}

<tui-files>
    @if (control.valueChanges | async; as file) {
        <tui-file
            [file]="file"
            (remove)="removeFile()"
        />
    }
</tui-files>
`;export{l as default};
