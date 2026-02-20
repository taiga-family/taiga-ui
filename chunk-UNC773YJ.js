import"./chunk-HU6DUUP4.js";var e=`<tui-textfield
    [content]="isSame(control.value, tomorrow) ? 'Next morning' : ''"
    [open]="open()"
    (openChange)="open.set($event)"
>
    <input
        placeholder="Choose a date"
        tuiInputDateTime
        [formControl]="control"
    />
    <ng-container *tuiDropdown>
        <tui-calendar />
        <button
            appearance="action"
            size="m"
            tuiButton
            type="button"
            (click)="control.setValue(tomorrow); open.set(false)"
        >
            Tomorrow morning
        </button>
    </ng-container>
</tui-textfield>
`;export{e as default};
