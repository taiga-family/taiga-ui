import"./chunk-HU6DUUP4.js";var n=`<tui-elastic-container class="visible">
    @for (_ of '-'.repeat(content); track $index) {
        <div class="tui-space_bottom-4">I'm content</div>
    }
    <button
        size="s"
        tuiButton
        type="button"
        class="tui-space_right-2"
        (click)="add()"
    >
        Add content
    </button>
    <button
        size="s"
        tuiButton
        type="button"
        (click)="remove()"
    >
        Remove content
    </button>
</tui-elastic-container>
`;export{n as default};
