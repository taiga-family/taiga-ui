import"./chunk-HU6DUUP4.js";var t=`<label tuiInputFiles>
    <input
        multiple
        tuiInputFiles
        [(ngModel)]="files"
    />
</label>
@for (file of files(); track file) {
    <section tuiAnimated>
        <div [style.overflow]="'hidden'">
            <div
                orientation="horizontal"
                tuiFile
            >
                <tui-icon icon="@tui.file" />
                <div tuiTitle>
                    {{ file.name }}
                    <div tuiSubtitle>{{ formatSize(['B', 'KB', 'MB'], file.size) }}</div>
                </div>
                <button
                    tuiButtonX
                    (click)="remove(file)"
                >
                    Remove
                </button>
            </div>
        </div>
    </section>
}
`;export{t as default};
