import"./chunk-HU6DUUP4.js";var l=`<tui-textfield
    iconStart="@tui.alarm-clock"
    tuiTextfieldSize="m"
    [tuiTextfieldCleaner]="false"
>
    <label tuiLabel>I am a label</label>

    <input
        placeholder="I am placeholder"
        tuiInputTime
        [(ngModel)]="value"
    />

    @if (value) {
        <tui-icon [icon]="value.hours < 8 ? '@tui.moon' : '@tui.sun'" />
    }

    <tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
`;export{l as default};
