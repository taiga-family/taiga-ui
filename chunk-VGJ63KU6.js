import"./chunk-HU6DUUP4.js";var i=`@let items = items$ | async;
<tui-textfield tuiChevron>
    <input
        #inputRef
        placeholder="Search country"
        tuiComboBox
        [(ngModel)]="value"
        (input)="search$.next($any($event.target).value)"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [emptyContent]="inputRef.value.length < 2 ? 'Enter at least 2 characters' : 'Nothing found!'"
        [items]="inputRef.value.length < 2 ? [] : items"
    />

    @if (items && showLoader()) {
        <tui-loader />
    }
</tui-textfield>
`;export{i as default};
