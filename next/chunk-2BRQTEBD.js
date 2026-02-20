import"./chunk-HU6DUUP4.js";var l=`@if (!control.value) {
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

<tui-files class="tui-space_top-1">
    @if (control.valueChanges | async; as file) {
        <tui-file
            [file]="file"
            (remove)="removeFile()"
        />
    }
</tui-files>
`;export{l as default};
