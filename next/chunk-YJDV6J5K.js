import"./chunk-HU6DUUP4.js";var i=`<search tuiSearch>
    <form [formGroup]="form">
        <fieldset tuiTextfieldSize="s">
            <tui-textfield iconStart="@tui.search">
                <input
                    formControlName="search"
                    placeholder="Search"
                    tuiInput
                />
            </tui-textfield>
            <tui-textfield tuiChevron>
                <input
                    formControlName="select"
                    placeholder="User"
                    tuiSelect
                />
                <tui-data-list-wrapper
                    *tuiDropdown
                    [items]="items"
                />
            </tui-textfield>
            <button
                size="s"
                tuiButton
                type="button"
            >
                Search
            </button>
        </fieldset>
        <fieldset>
            <tui-segmented>
                @for (segment of segments; track segment) {
                    <label>
                        <input
                            formControlName="segmented"
                            type="radio"
                            [value]="segment"
                        />
                        {{ segment || 'All' }}
                    </label>
                }
            </tui-segmented>
            <tui-filter
                formControlName="filter"
                size="s"
                [items]="filters"
            />
            Results: 999
            <hr />
            <label tuiLabel>
                <input
                    formControlName="switch"
                    tuiSwitch
                    type="checkbox"
                />
                Assigned to me
            </label>
            <hr />
            <button
                appearance="flat"
                iconStart="@tui.rotate-cw"
                size="xs"
                tuiButton
                type="reset"
                [disabled]="!count()"
            >
                Clear {{ count() ? \`(\${count()})\` : '' }}
            </button>
            <button
                iconStart="@tui.cloud-download"
                tuiLink
                type="button"
                [style.margin-inline-start]="'auto'"
            >
                Download
            </button>
        </fieldset>
    </form>
</search>
`;export{i as default};
