import"./chunk-LQ6M4NCU.js";var o=`<label tuiLabel>
    <input
        tuiSwitch
        type="checkbox"
        [ngModel]="showLabels()"
        (ngModelChange)="showLabels.set($event)"
    />
    {{ showLabels() ? 'Hide labels' : 'Show labels' }}
</label>

<tui-input-card-group [formControl]="control" />
`;export{o as default};
