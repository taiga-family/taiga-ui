import"./chunk-HU6DUUP4.js";var n=`<label tuiLabel>
    <input
        tuiSwitch
        type="checkbox"
        [(ngModel)]="skeleton"
    />
    Show skeleton
</label>

<p>
    <span
        [tuiSkeleton]="
            skeleton
                ? 'This text serves as the content behind the skeleton and depending on its length, the skeleton will adjust to fit it.'
                : ''
        "
    >
        {{ skeleton ? '' : 'This text will be replaced by a placeholder.' }}
    </span>
</p>

<span [tuiSkeleton]="skeleton && 20">
    {{ skeleton ? '' : 'This text will be replaced by a skeleton made of 20 random length non-breaking spaces.' }}
</span>
`;export{n as default};
