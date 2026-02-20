import"./chunk-HU6DUUP4.js";var r=`<tui-textfield>
    <label tuiLabel>Enter a number</label>

    <input
        tuiInputNumber
        [formControl]="control"
    />
</tui-textfield>
<tui-error [formControl]="control" />

<p>
    <strong>Control value:</strong>
    <code>{{ control.value | json }}</code>
</p>
`;export{r as default};
