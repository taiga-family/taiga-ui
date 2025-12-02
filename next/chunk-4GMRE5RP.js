import"./chunk-42JZD6NG.js";var o=`<tui-textfield tuiDropdownSheet="Select country">
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
