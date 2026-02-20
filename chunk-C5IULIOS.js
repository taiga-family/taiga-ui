import"./chunk-HU6DUUP4.js";var i=`<tui-textfield [style.inline-size.rem]="19">
    <label tuiLabel>Phone number</label>
    <input
        tuiInputPhoneInternational
        [countries]="countries"
        [(countryIsoCode)]="countryIsoCode"
        [(ngModel)]="value"
    />
    <tui-icon
        appearance="negative"
        tuiHintAppearance="error"
        tuiHintDirection="top"
        tuiTooltip="I am a hint"
    />
    <tui-icon icon="@tui.phone" />
</tui-textfield>
`;export{i as default};
