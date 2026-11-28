import"./chunk-LQ6M4NCU.js";var e=`<tui-elastic-container class="visible">
    @for (_ of '-'.repeat(content); track $index) {
        <div>I'm content</div>
    }
    <button
        size="s"
        tuiButton
        type="button"
        class="add"
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
`;export{e as default};
