import"./chunk-42JZD6NG.js";var r=`<form [formGroup]="form">
    <tui-input formControlName="user">
        User
        <tui-data-list-wrapper
            *tuiDataList
            [items]="items$ | async | tuiFilterByInput"
        />
    </tui-input>
</form>
`;export{r as default};
