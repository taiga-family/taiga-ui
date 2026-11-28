import"./chunk-LQ6M4NCU.js";var a=`<!-- Works in several levels-->
<div
    class="wrapper"
    [tuiDateFormat]="{mode: 'yyyy/mm/dd'}"
>
    <!-- You can also put directive directly on input-date -->
    <tui-textfield>
        <label tuiLabel>Cool</label>
        <input
            tuiInputDate
            [formControl]="control"
            [tuiDateFormat]="{separator: '-'}"
        />
        <tui-calendar *tuiDropdown />
    </tui-textfield>
</div>
`;export{a as default};
