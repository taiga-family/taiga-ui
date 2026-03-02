import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="InputFiles"
    package="KIT"
    path="kit/components/files"
    type="components"
>
    <ng-template pageTab>
        <div>An input for uploading one or several files using native input file capabilities</div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index) {
                        @case (0) {
                            Selecting one file at a time
                        }
                        @case (1) {
                            Selecting and processing multiple files at once
                        }
                        @case (2) {
                            Displaying file-like items without the input
                        }
                        @case (3) {
                            Collapsing files list when it's too long
                        }
                        @case (4) {
                            Customizing drop area
                        }
                        @case (5) {
                            The capture attribute works only on mobile browsers
                        }
                        @case (6) {
                            Using template driven forms
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <label tuiInputFiles>
                <input
                    #validator="tuiInputFilesValidator"
                    tuiInputFiles
                    [accept]="accept"
                    [formControl]="control"
                    [invalid]="controlDoc.invalid"
                    [maxFileSize]="maxFileSize"
                    [multiple]="multiple"
                    [tuiDisabled]="controlDoc.disabled"
                    (reject)="updateRejected($event); reject.emitEvent($event)"
                />
            </label>
            <tui-files
                class="tui-space_top-2"
                [max]="maxFilesCount"
                [(expanded)]="expanded"
            >
                @for (file of files$ | async; track file) {
                    <tui-file
                        *tuiItem
                        [file]="file"
                        [showDelete]="showDelete"
                        [showSize]="showSize"
                        [size]="size"
                        (remove)="removeFile(file); remove.emitEvent($event)"
                    />
                }

                @for (file of rejected; track file) {
                    <tui-file
                        *tuiItem
                        state="error"
                        [file]="(file | tuiFileRejected: validator | async) || file"
                        [showDelete]="showDelete"
                        [showSize]="showSize"
                        [size]="size"
                        (remove)="removeFile(file); remove.emitEvent($event)"
                    />
                }
            </tui-files>
        </tui-doc-demo>
        <h3>TuiInputFiles</h3>
        <table tuiDocAPI>
            <tr
                name="[accept]"
                tuiDocAPIItem
                type="string"
                [items]="acceptVariants"
                [(value)]="accept"
            >
                Allowed formats
            </tr>
            <tr
                name="[maxFileSize]"
                tuiDocAPIItem
                type="number"
                [items]="maxFileSizeVariants"
                [(value)]="maxFileSize"
            >
                Max file size in bytes (30 MB by default \u2014 30 * 1000 * 1000)
            </tr>
            <tr
                name="[multiple]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="multiple"
                (valueChange)="multipleChange($event ?? false)"
            >
                Allows to upload several files
            </tr>
            <tr
                #reject
                name="(reject)"
                tuiDocAPIItem
                type="TuiFileLike[]"
            >
                Emits files that were rejected.
            </tr>
            <tbody
                #controlDoc
                tuiDocControl
                [hiddenOptions]="['readOnly']"
            ></tbody>
        </table>

        <h3>TuiFiles</h3>
        <table tuiDocAPI>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="number"
                [(value)]="maxFilesCount"
            >
                Maximum number of displayed files
            </tr>
            <tr
                name="[(expanded)]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="expanded"
            >
                Expanded/collapsed state for multiple files that are limited by the max property
            </tr>
        </table>

        <h3>TuiFile</h3>
        <table tuiDocAPI>
            <tr
                name="[showDelete]"
                tuiDocAPIItem
                type="boolean | 'always'"
                [items]="showDeleteVariants"
                [(value)]="showDelete"
            >
                Allow to delete file after attach it
            </tr>
            <tr
                name="[file]"
                tuiDocAPIItem
                type="TuiFileLike"
            >
                File
            </tr>
            <tr
                name="[state]"
                tuiDocAPIItem
                type="TuiFileState"
            >
                State of the file
            </tr>
            <tr
                name="[showSize]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="showSize"
            >
                Show file size
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeL"
                [items]="sizeVariants"
                [(value)]="size"
            >
                Component size
            </tr>
            <tr
                #remove
                name="(remove)"
                tuiDocAPIItem
                type="void"
            >
                Emits on click on close button. When subscribed to, close button appears.
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
