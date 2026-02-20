import"./chunk-HU6DUUP4.js";var l=`<ng-container tuiTableFilters>
    <form [formGroup]="filterForm">
        <tui-textfield>
            <label tuiLabel>Minimal balance</label>
            <input
                formControlName="balance"
                tuiInputNumber
                tuiTableFilter="controls"
                [tuiGenericFilter]="filter"
            />
        </tui-textfield>

        <label class="toggle">
            <input
                size="s"
                tuiSwitch
                type="checkbox"
                [ngModel]="filterForm.enabled"
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
            @let data = $any(items() | tuiTableFilters | async);

            @for (item of data; track item) {
                <tr
                    tuiTr
                    [formGroup]="item"
                >
                    <td
                        *tuiCell="'name'"
                        tuiTd
                    >
                        <tui-textfield>
                            <input
                                autocomplete="name"
                                formControlName="name"
                                placeholder="Type an name"
                                tuiInput
                            />
                        </tui-textfield>
                    </td>
                    <td
                        *tuiCell="'balance'"
                        tuiTd
                    >
                        <tui-textfield>
                            <input
                                formControlName="balance"
                                placeholder="Type a balance"
                                tuiInputNumber
                            />
                        </tui-textfield>
                    </td>
                </tr>
            }
        </tbody>
    </table>

    <button
        tuiButton
        type="button"
        class="tui-space_top-2"
        (click)="addRow()"
    >
        Add
    </button>
</ng-container>
`;export{l as default};
