import"./chunk-HU6DUUP4.js";var l=`<tui-textfield multi>
    <label tuiLabel>Choose a date</label>

    <input
        tuiInputDateMulti
        [(ngModel)]="value"
    />

    <tui-calendar *tuiDropdown />
</tui-textfield>

<p>{{ value | json }}</p>
`;export{l as default};
