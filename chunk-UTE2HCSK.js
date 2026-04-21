import"./chunk-HU6DUUP4.js";var a=`<label tuiLabel>
    <input
        tuiCheckbox
        type="checkbox"
        [ngModel]="false"
    />

    Use Node.js LTS, NPM v10 or higher.
</label>

<label tuiLabel>
    <input
        tuiCheckbox
        type="checkbox"
        [ngModel]="false"
    />

    Update Taiga UI version to
    <a
        rel="noreferrer noopener"
        target="_blank"
        tuiLink
        [href]="\`https://www.npmjs.com/package/@taiga-ui/cdk/v/v\${tuiMajor - 1}-lts\`"
    >
        latest v{{ tuiMajor - 1 }}.
    </a>
</label>

<label tuiLabel>
    <input
        tuiCheckbox
        type="checkbox"
        [ngModel]="false"
    />

    Update Angular version to v19 or higher.
</label>

<label tuiLabel>
    <input
        tuiCheckbox
        type="checkbox"
        [ngModel]="false"
    />

    Ensure Prettier\u2019s endOfLine option is set to auto for fix some issues with end of line after migration.
</label>

<ng-content />
`;export{a as default};
