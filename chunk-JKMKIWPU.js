import"./chunk-HU6DUUP4.js";var a=`<ng-container tuiTableFilters>
    <form [formGroup]="form">
        <tui-textfield>
            <label tuiLabel>Minimal balance</label>

            <input
                formControlName="balance"
                tuiInputNumber
                tuiTableFilter="balance"
                [tuiGenericFilter]="filter"
            />
        </tui-textfield>

        <label class="toggle">
            <input
                size="s"
                tuiSwitch
                type="checkbox"
                [ngModel]="form.enabled"
                [ngModelOptions]="{standalone: true}"
                [showIcons]="false"
                (ngModelChange)="onToggle($event)"
            />
            Enable filtering
        </label>
    </form>
    <table
        tuiTable
        class="table"
        [columns]="columns"
    >
        <thead>
            <tr>
                <th tuiTh>Name</th>
                <th tuiTh>Balance</th>
            </tr>
        </thead>
        <tbody tuiTbody>
            <!-- Type '{}' must have a '[Symbol.iterator]()' method that returns an iterator. -->
            @let items = $any(data | tuiTableFilters | async);

            @for (item of items; track item) {
                <tr tuiTr>
                    <td
                        *tuiCell="'name'"
                        tuiTd
                    >
                        {{ item.name }}
                    </td>
                    <td
                        *tuiCell="'balance'"
                        tuiTd
                    >
                        {{ item.balance | tuiFormatNumber }}
                    </td>
                </tr>
            }
        </tbody>
    </table>
</ng-container>
`;export{a as default};
