import"./chunk-HU6DUUP4.js";var i=`<div tuiGroup>
    <tui-textfield
        tuiChevron
        tuiTextfieldSize="s"
        [tuiTextfieldCleaner]="false"
    >
        <input
            tuiSelect
            [(ngModel)]="mode"
        />
        <tui-data-list-wrapper
            *tuiDropdown
            [items]="modes"
        />
    </tui-textfield>
    <button
        size="s"
        tuiButton
        type="button"
        (click)="value.set(null)"
    >
        Clear
    </button>
</div>
<tui-date-picker
    [disabledItemHandler]="disabledItemHandler"
    [max]="max"
    [min]="min"
    [mode]="mode()"
    [(value)]="value"
/>
<p>{{ value() | json }}</p>
`;export{i as default};
