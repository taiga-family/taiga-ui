import"./chunk-HU6DUUP4.js";var i=`<tui-textfield iconStart="@tui.search">
    <label tuiLabel>Disabled</label>
    <input
        tuiInput
        [disabled]="true"
        [(ngModel)]="value"
    />
    <tui-icon tuiTooltip="Disabled does not show tooltip" />
</tui-textfield>
<tui-textfield iconStart="@tui.search">
    <label tuiLabel>Read-only</label>
    <input
        placeholder="I am placeholder"
        tuiInput
        [readOnly]="true"
        [(ngModel)]="value"
    />
    <tui-icon tuiTooltip="Readonly shows tooltip" />
</tui-textfield>
<tui-textfield iconStart="@tui.search">
    <label tuiLabel>Invalid</label>
    <input
        placeholder="I am placeholder"
        tuiInput
        [invalid]="true"
        [(ngModel)]="value"
    />
    <tui-icon tuiTooltip="Can also follow Angular validation" />
</tui-textfield>
`;export{i as default};
