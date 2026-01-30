import"./chunk-B4AJQJMI.js";var r=`<tui-textfield>
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
