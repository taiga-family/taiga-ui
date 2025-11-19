import"./chunk-42JZD6NG.js";var i=`<form [formGroup]="group">
    <tui-textfield>
        <label tuiLabel>Name</label>
        <input
            formControlName="name"
            tuiTextfield
        />
    </tui-textfield>
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
        <tui-textfield>
            <label tuiLabel>Contact</label>
            <input
                formControlName="contact"
                tuiTextfield
                [tuiValidator]="validator"
            />
        </tui-textfield>
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
