import"./chunk-HU6DUUP4.js";var a=`<p
    tuiTextfieldSize="m"
    class="filters"
>
    <tui-textfield class="input">
        <label tuiLabel>Find on page</label>
        <input
            tuiInput
            [(ngModel)]="search"
        />
    </tui-textfield>

    <tui-textfield>
        <label tuiLabel>Minimum age</label>
        <input
            tuiInputNumber
            [formControl]="minAge"
            [tuiNumberFormat]="{precision: 0}"
        />
    </tui-textfield>
</p>
<p class="filters">
    <label tuiLabel>
        <input
            tuiCheckbox
            type="checkbox"
            [(ngModel)]="dob"
        />
        Enable sorting by DOB
    </label>
    <button
        size="m"
        tuiButton
        tuiChevron
        tuiDropdownAuto
        type="button"
        [tuiDropdown]="dropdown"
    >
        Columns
    </button>
    <ng-template #dropdown>
        <tui-reorder
            class="columns"
            [enabled]="enabled"
            [(items)]="initial"
            (enabledChange)="onEnabled($event)"
        />
    </ng-template>
</p>
<tui-loader
    [loading]="!!(loading$ | async)"
    [overlay]="true"
>
    <p>
        <b>Sort key:</b>
        {{ sortKey$ | async }},
        <b>direction:</b>
        {{ direction$ | async }}
    </p>

    @if (data$ | async; as data) {
        <table
            tuiTable
            class="table"
            [columns]="columns"
            [direction]="(direction$ | async) ?? -1"
            [tuiSortBy]="sortKey$ | async"
            (tuiSortChange)="change($event)"
        >
            <thead>
                <tr tuiThGroup>
                    <th
                        *tuiHead="'name'"
                        tuiSortable
                        tuiTh
                        [requiredSort]="true"
                    >
                        Name
                    </th>
                    <th
                        *tuiHead="'dob'"
                        tuiTh
                        [tuiSortable]="dob"
                    >
                        Date of Birth
                    </th>
                    <th
                        *tuiHead="'age'"
                        tuiSortable
                        tuiTh
                        [requiredSort]="true"
                    >
                        Age
                    </th>
                </tr>
            </thead>
            @let sortedData = data | tuiTableSort;
            <tbody
                tuiTbody
                [data]="sortedData"
            >
                @for (item of sortedData; track item) {
                    <tr tuiTr>
                        <td
                            *tuiCell="'name'"
                            tuiTd
                            [class.match]="isMatch(item.name)"
                        >
                            {{ item.name }}
                        </td>
                        <td
                            *tuiCell="'dob'"
                            tuiTd
                            [class.match]="isMatch(item.dob)"
                        >
                            {{ item.dob }}
                        </td>
                        <td
                            *tuiCell="'age'"
                            tuiTd
                            [class.match]="isMatch(item.age)"
                        >
                            {{ item.age }}
                        </td>
                    </tr>
                }
            </tbody>
            <tfoot>
                <tr>
                    <td [colSpan]="columns.length">
                        <tui-table-pagination
                            class="tui-space_top-2"
                            [page]="(page$ | async) || 0"
                            [total]="(total$ | async) || 0"
                            (paginationChange)="onPagination($event)"
                        />
                    </td>
                </tr>
            </tfoot>
        </table>
    }
</tui-loader>
`;export{a as default};
