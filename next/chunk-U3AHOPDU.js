import"./chunk-HU6DUUP4.js";var o=`<tui-textfield tuiDropdownSheet="Select country">
    <label tuiLabel>Phone number</label>
    <input
        tuiInputPhoneInternational
        [countries]="countries | tuiSortCountries"
        [countrySearch]="true"
        [(countryIsoCode)]="countryIsoCode"
        [(ngModel)]="value"
    />
</tui-textfield>
`;export{o as default};
