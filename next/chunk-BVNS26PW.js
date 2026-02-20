import"./chunk-HU6DUUP4.js";var a=`<tui-textfield>
    <label tuiLabel>Select date</label>
    <input
        list="dates"
        tuiInputDate
        type="date"
        [(ngModel)]="value"
    />
    <datalist id="dates">
        @for (date of dates | keyvalue: asIs; track date) {
            <option [value]="date.value.toJSON()">
                {{ date.key }}
            </option>
        }
    </datalist>
    <section *tuiDropdown>
        <tui-calendar />
        <tui-data-list>
            @for (date of dates | keyvalue: asIs; track date) {
                <button
                    tuiOption
                    [value]="date.value"
                >
                    {{ date.key }}
                </button>
            }
        </tui-data-list>
    </section>
</tui-textfield>
`;export{a as default};
