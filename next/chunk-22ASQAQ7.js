import"./chunk-HU6DUUP4.js";var a=`<button
    tuiButton
    type="button"
    (click)="value = {test: 'value'}"
>
    Set copy
</button>
<p>
    <label tuiLabel>
        <input
            name="test"
            tuiRadio
            type="radio"
            [identityMatcher]="identityMatcher"
            [value]="{test: 'value'}"
            [(ngModel)]="value"
        />
        value
    </label>
</p>
<p>
    <label tuiLabel>
        <input
            name="test"
            tuiRadio
            type="radio"
            [identityMatcher]="identityMatcher"
            [value]="{test: 'test'}"
            [(ngModel)]="value"
        />
        test
    </label>
</p>
<p>
    <label tuiLabel>
        <input
            name="test"
            tuiRadio
            type="radio"
            [identityMatcher]="identityMatcher"
            [value]="{test: 'item'}"
            [(ngModel)]="value"
        />
        item
    </label>
</p>
`;export{a as default};
