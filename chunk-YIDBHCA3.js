import"./chunk-42JZD6NG.js";var r=`<tui-textfield>
    <label tuiLabel>Enter a number</label>

    <input
        tuiInputNumber
        [formControl]="control"
    />
</tui-textfield>
<tui-error [formControl]="control" />

<p><strong>Control value:</strong></p>
<code>{{ control.value | json }}</code>
`;export{r as default};
