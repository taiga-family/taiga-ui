import"./chunk-HU6DUUP4.js";var e=`<tui-textfield
    iconStart="@tui.euro"
    tuiTextfieldSize="m"
>
    <input
        placeholder="I am placeholder"
        tuiInputSlider
        [max]="100"
        [min]="0"
        [(ngModel)]="value"
    />

    <input
        tuiSlider
        type="range"
    />

    <tui-icon
        icon="@tui.circle-alert"
        style="color: var(--tui-status-negative)"
    />

    <tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
`;export{e as default};
