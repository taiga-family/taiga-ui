import"./chunk-HU6DUUP4.js";var n=`<p>
    <button
        appearance="secondary"
        iconStart="@tui.circle-help"
        tuiHint="Works well with icon buttons"
        tuiHintDescribe
        tuiHintDirection="end"
        tuiIconButton
        type="button"
    ></button>
</p>
<p>
    <button
        id="button"
        appearance="secondary"
        iconStart="@tui.circle-help"
        tuiButton
        type="button"
    >
        Hint
    </button>
    <tui-icon
        tuiHintDirection="end"
        tuiTooltip="Or with external tooltip"
        tuiTooltipDescribe="button"
        class="tui-space_top-4 tui-space_left-4"
    />
</p>

<tui-textfield>
    <input
        tuiInput
        [(ngModel)]="value"
    />

    <label tuiLabel>Input with accessible hint</label>

    <tui-icon tuiTooltip="This is built-in with controls" />
</tui-textfield>
`;export{n as default};
