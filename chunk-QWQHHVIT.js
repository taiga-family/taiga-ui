import"./chunk-HU6DUUP4.js";var o=`<tui-textfield class="tui-space_bottom-2">
    <label tuiLabel>Copy this</label>

    <input
        tuiInputNumber
        [tuiCopyProcessor]="numberProcessor()"
        [(ngModel)]="value"
    />
</tui-textfield>

<div [tuiCopyProcessor]="textProcessor">Try copy this text</div>
`;export{o as default};
