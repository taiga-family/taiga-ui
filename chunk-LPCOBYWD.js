import"./chunk-LQ6M4NCU.js";var i=`<tui-textfield>
    <label tuiLabel>Copy this</label>

    <input
        tuiInputNumber
        [tuiCopyProcessor]="numberProcessor()"
        [(ngModel)]="value"
    />
</tui-textfield>

<div [tuiCopyProcessor]="textProcessor">Try copy this text</div>
`;export{i as default};
