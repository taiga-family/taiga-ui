import"./chunk-HU6DUUP4.js";var f=`<tui-files [max]="3">
    @for (file of files; track file) {
        <tui-file
            *tuiItem
            state="normal"
            [file]="file"
        />
    }

    @for (file of rejectedFiles; track file) {
        <a
            *tuiItem
            rel="noreferrer"
            state="error"
            target="_blank"
            tuiFile
            [file]="file"
        ></a>
    }
</tui-files>
`;export{f as default};
