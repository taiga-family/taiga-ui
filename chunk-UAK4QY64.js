import"./chunk-42JZD6NG.js";var i=`<form
    class="input-wrapper"
    [formGroup]="testForm"
>
    <div
        tuiGroup
        class="group"
    >
        <div>
            <tui-textfield [style.border-radius]="'inherit'">
                <input
                    formControlName="testValue"
                    placeholder="House"
                    tuiTextfield
                />
                <label tuiLabel>House</label>
                <tui-icon tuiTooltip="Write a number" />
            </tui-textfield>

            <tui-error formControlName="testValue" />
        </div>
        <div>
            <tui-textfield
                multi
                tuiChevron
                [rows]="1"
                [style.border-radius]="'inherit'"
                [tuiTextfieldCleaner]="false"
            >
                <input
                    formControlName="multiSelectControl"
                    placeholder="Building"
                    tuiInputChip
                />

                <tui-input-chip *tuiItem />

                <tui-data-list-wrapper
                    *tuiDropdown
                    tuiMultiSelectGroup
                    [items]="items"
                />
                <tui-icon tuiTooltip="Write house building" />
            </tui-textfield>
            <tui-error formControlName="multiSelectControl" />
        </div>
        <div>
            <tui-textfield [style.border-radius]="'inherit'">
                <input
                    formControlName="testValue3"
                    placeholder="Apartment number"
                    tuiTextfield
                />
                <label tuiLabel>Apartment</label>
                <tui-icon tuiTooltip="Write an apartment number only" />
            </tui-textfield>
            <tui-error formControlName="testValue3" />
        </div>
    </div>
</form>
`;export{i as default};
