import"./chunk-HU6DUUP4.js";var i=`<button
    size="s"
    tuiButton
    type="button"
    (click)="add()"
>
    Add item
</button>
<tui-elastic-container class="tui-space_top-4">
    @for (item of items; track item) {
        <div class="wrapper">
            <h3 class="title">
                <button
                    appearance="secondary"
                    size="s"
                    tuiIconButton
                    type="button"
                    class="tui-space_right-2"
                    [style.border-radius.%]="100"
                    [tuiChevron]="item.expanded"
                    (click)="item.expanded = !item.expanded"
                >
                    Expand
                </button>
                Nested form
                <button
                    appearance="flat"
                    iconStart="@tui.trash"
                    size="s"
                    tuiIconButton
                    type="button"
                    class="remove"
                    [style.border-radius.%]="100"
                    (click)="remove($index)"
                >
                    Remove
                </button>
            </h3>
            <tui-expand [expanded]="item.expanded">
                <tui-textfield class="tui-space_top-4">
                    <input
                        tuiInput
                        [(ngModel)]="item.value"
                    />
                    <label tuiLabel>Some input</label>
                </tui-textfield>
            </tui-expand>
        </div>
    }
</tui-elastic-container>
`;export{i as default};
