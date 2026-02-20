import"./chunk-HU6DUUP4.js";var i=`@for (mode of supportedModes; track mode) {
    <tui-textfield>
        <label tuiLabel>{{ mode }}</label>
        <input
            tuiInputTime
            type="time"
            [mode]="mode"
            [ngModel]="initialValue"
        />
    </tui-textfield>
}
`;export{i as default};
