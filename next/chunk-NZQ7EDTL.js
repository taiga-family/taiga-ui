import"./chunk-42JZD6NG.js";var i=`<form [formGroup]="group">
    <tui-input formControlName="name">Name</tui-input>
    <tui-textfield
        tuiChevron
        class="tui-space_vertical-3"
    >
        <label tuiLabel>Connection</label>

        <input
            tuiSelect
            [ngModelOptions]="{standalone: true}"
            [(ngModel)]="type"
        />
        <tui-data-list-wrapper
            *tuiDropdown
            new
            [items]="items"
        />
    </tui-textfield>
    @if (type === items[0]!) {
        <tui-input
            formControlName="contact"
            [tuiValidator]="validator"
        >
            Contact
        </tui-input>
    } @else {
        <tui-textfield>
            <label tuiLabel>Contact</label>

            <input
                autocomplete="tel"
                formControlName="contact"
                mask="+7 ### ###-##-##"
                tuiInputPhone
            />
        </tui-textfield>
    }
</form>
`;export{i as default};
