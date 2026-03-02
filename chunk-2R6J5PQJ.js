import"./chunk-HU6DUUP4.js";var e=`<form
    class="input-wrapper"
    [formGroup]="form"
>
    <div
        tuiGroup
        class="group"
    >
        <div>
            <tui-textfield [style.border-radius]="'inherit'">
                <input
                    formControlName="value"
                    placeholder="House"
                    tuiInput
                />
                <label tuiLabel>House</label>
                <tui-icon tuiTooltip="Write a number" />
            </tui-textfield>
            <tui-error formControlName="value" />
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
                    formControlName="multi"
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
            <tui-error formControlName="multi" />
        </div>
        <div>
            <tui-textfield [style.border-radius]="'inherit'">
                <input
                    formControlName="number"
                    placeholder="Apartment number"
                    tuiInput
                />
                <label tuiLabel>Apartment</label>
                <tui-icon tuiTooltip="Write an apartment number only" />
            </tui-textfield>
            <tui-error formControlName="number" />
        </div>
    </div>
</form>
`;export{e as default};
