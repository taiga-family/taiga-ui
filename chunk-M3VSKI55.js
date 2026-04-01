import"./chunk-HU6DUUP4.js";var e=`<tui-textfield
    iconEnd="@tui.settings"
    iconStart="@tui.search"
>
    <label tuiLabel>I am a label</label>
    <input
        placeholder="I am placeholder"
        tuiInput
        [(ngModel)]="value"
    />
    <tui-icon icon="@tui.bell" />
    <tui-icon tuiTooltip="I am a hint" />
</tui-textfield>

<label tuiLabel>
    For long labels it is better to use label outside as it can wrap to multiple lines
    <tui-textfield
        #m
        iconEnd="@tui.settings"
        iconStart="@tui.search"
        tuiTextfieldSize="m"
    >
        <input
            tuiInput
            [placeholder]="m.focused() ? 'I am placeholder' : 'I am a label'"
            [(ngModel)]="value"
        />
        <tui-icon icon="@tui.bell" />
        <tui-icon tuiTooltip="I am a hint" />
    </tui-textfield>
</label>

<tui-textfield
    #s
    iconEnd="@tui.settings"
    iconStart="@tui.search"
    tuiTextfieldSize="s"
>
    <input
        tuiInput
        [placeholder]="s.focused() ? 'I am placeholder' : 'I am a label'"
        [(ngModel)]="value"
    />
    <tui-icon icon="@tui.bell" />
    <tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
`;export{e as default};
