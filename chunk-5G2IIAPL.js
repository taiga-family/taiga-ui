import"./chunk-LQ6M4NCU.js";var t=`<label
    tuiDropdownAlign="center"
    tuiDropdownAppearance="round"
    tuiDropdownDirection="top"
    tuiLabel
    [tuiDropdown]="content"
    [tuiDropdownManual]="open"
>
    <input
        tuiSwitch
        type="checkbox"
        class="dropdown-switch"
        [showIcons]="false"
        [(ngModel)]="open"
    />
    Show dropdown
    <ng-template #content>
        <blockquote>I'm a customized dropdown!</blockquote>
    </ng-template>
</label>
`;export{t as default};
