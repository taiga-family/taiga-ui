import"./chunk-B4AJQJMI.js";var i=`<tui-textfield>
    <label tuiLabel>Bidirectional communication</label>
    <input
        tuiInput
        [(ngModel)]="value"
    />
</tui-textfield>
<p>
    <button
        tuiButton
        type="button"
        (click)="toggle(template)"
    >
        Toggle popout window
    </button>
</p>
<ng-template #template>
    <section tuiCardLarge>
        <tui-textfield>
            <label tuiLabel>Bidirectional communication</label>
            <input
                tuiAutoFocus
                tuiInput
                [(ngModel)]="value"
            />
        </tui-textfield>
    </section>
</ng-template>
`;export{i as default};
