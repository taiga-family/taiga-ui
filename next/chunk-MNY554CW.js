import"./chunk-HU6DUUP4.js";var a=`<tui-textfield>
    <input
        list="dates"
        placeholder="Pick a date"
        tuiInputDateTime
        type="datetime-local"
        [(ngModel)]="value"
    />

    <datalist id="dates">
        @for (date of dates | keyvalue: asIs; track date) {
            <option [value]="toISOString(date.value)">
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

            <button
                tuiOption
                [disabled]="true"
            >
                v5
            </button>
        </tui-data-list>
    </section>
</tui-textfield>
`;export{a as default};
