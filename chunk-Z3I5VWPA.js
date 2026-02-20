import"./chunk-HU6DUUP4.js";var i=`<button
    tuiButton
    type="button"
    (click)="open.set(true)"
>
    Open
</button>

<tui-drawer
    *tuiPopup="open()"
    direction="start"
    class="drawer"
    [overlay]="true"
    (click.self)="onClose()"
>
    <header class="header">
        <h2 tuiHeader>
            <div tuiTitle>Sticky header</div>
            <div tuiAccessories>
                <button
                    tuiButton
                    type="button"
                    (click)="onClose()"
                >
                    Close
                </button>
            </div>
        </h2>
    </header>
    <tui-textfield>
        <label tuiLabel>Enter value</label>
        <input
            tuiInput
            [formControl]="control"
        />
    </tui-textfield>
    @for (_ of '-'.repeat(30); track $index) {
        <p>Content</p>
    }
</tui-drawer>
`;export{i as default};
