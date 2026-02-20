import"./chunk-HU6DUUP4.js";var e=`<label
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
        class="tui-space_right-2"
        [showIcons]="false"
        [(ngModel)]="open"
    />
    Show dropdown
    <ng-template #content>
        <blockquote>I'm a customized dropdown!</blockquote>
    </ng-template>
</label>
`;export{e as default};
