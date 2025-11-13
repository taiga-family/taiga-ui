import"./chunk-42JZD6NG.js";var l=`<tui-textfield>
    <label tuiLabel>Custom highlight</label>
    <textarea
        placeholder="Type 'width' or 'height'"
        tuiTextarea
        [content]="highlight"
        [(ngModel)]="value"
    ></textarea>
</tui-textfield>

<ng-template
    #highlight
    let-text
>
    <span [innerHTML]="process(text)"></span>
</ng-template>
`;export{l as default};
