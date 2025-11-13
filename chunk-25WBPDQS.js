import"./chunk-42JZD6NG.js";var i=`<form
    class="input-wrapper"
    [formGroup]="testForm"
>
    <div
        tuiGroup
        class="group"
    >
        <div>
            <tui-input
                formControlName="testValue"
                tuiHintContent="Write a number"
                [style.border-radius]="'inherit'"
            >
                House
                <input
                    placeholder="House"
                    tuiTextfieldLegacy
                />
            </tui-input>
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
                    new
                    tuiMultiSelectGroup
                    [items]="items"
                />
                <tui-icon tuiTooltip="Write house building" />
            </tui-textfield>
            <tui-error formControlName="multiSelectControl" />
        </div>
        <div>
            <tui-input
                formControlName="testValue3"
                tuiHintContent="Write an apartment number only"
                [style.border-radius]="'inherit'"
            >
                Apartment
                <input
                    placeholder="Apartment number"
                    tuiTextfieldLegacy
                />
            </tui-input>
            <tui-error formControlName="testValue3" />
        </div>
    </div>
</form>
`;export{i as default};
