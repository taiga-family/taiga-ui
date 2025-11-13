import"./chunk-42JZD6NG.js";var n=`<tui-textfield tuiDropdownSheet="Select country">
    <label tuiLabel>Phone number</label>
    <input
        tuiInputPhoneInternational
        [countries]="(countries | tuiSortCountries | async) || []"
        [countrySearch]="true"
        [(countryIsoCode)]="countryIsoCode"
        [(ngModel)]="value"
    />
</tui-textfield>
`;export{n as default};
