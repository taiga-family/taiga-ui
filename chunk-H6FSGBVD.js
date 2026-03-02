import"./chunk-HU6DUUP4.js";var i=`<tui-textfield
    iconStart="@tui.calendar"
    tuiTextfieldSize="m"
>
    <label tuiLabel>I am a label</label>

    <input
        placeholder="I am placeholder"
        tuiInputMonth
        [(ngModel)]="value"
    />

    <tui-calendar-month *tuiDropdown />

    <tui-icon
        icon="@tui.circle-alert"
        style="color: var(--tui-status-negative); pointer-events: none"
    />

    <tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
`;export{i as default};
