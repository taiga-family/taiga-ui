import"./chunk-HU6DUUP4.js";var r=`<search tuiSearch>
    <form [formGroup]="form">
        <fieldset formArrayName="filters">
            <tui-search-filters>
                Filters
                <button
                    tuiButton
                    type="reset"
                >
                    Reset
                </button>
                @for (control of filters.controls; track control) {
                    <tui-textfield *tuiItem>
                        <label tuiLabel>Filter {{ $index + 1 }}</label>
                        <input
                            placeholder="Search"
                            tuiInput
                            [formControlName]="$index"
                        />
                    </tui-textfield>
                }
            </tui-search-filters>
            <button
                tuiButton
                type="button"
            >
                Search
            </button>
        </fieldset>
    </form>
</search>
<p>
    <code>{{ form.value | json }}</code>
</p>
`;export{r as default};
