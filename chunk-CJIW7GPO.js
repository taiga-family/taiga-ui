import"./chunk-LQ6M4NCU.js";var a=`<button
    appearance="secondary-grayscale"
    size="s"
    tuiButton
    tuiButtonSelect
    tuiChevron
    [(ngModel)]="language"
    (ngModelChange)="switcher.setLanguage($event)"
>
    {{ language }}
    <tui-data-list-wrapper
        *tuiDropdown
        [items]="languages"
    />
</button>
`;export{a as default};
