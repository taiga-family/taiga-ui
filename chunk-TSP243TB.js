import"./chunk-HU6DUUP4.js";var i=`<tui-scrollbar
    waIntersectionRoot
    class="scrollbar"
>
    <table
        size="l"
        tuiTable
        class="table"
        [columns]="columns"
        [direction]="-1"
        [sorter]="totalSorter"
    >
        <thead tuiThead>
            <tr tuiThGroup>
                <th
                    *tuiHead="'name'"
                    rowspan="2"
                    tuiTh
                    class="first"
                    [sorter]="null"
                    [sticky]="true"
                >
                    Name
                </th>
                <th
                    *tuiHead="'price'"
                    rowspan="2"
                    tuiTh
                    class="number second"
                    [sticky]="true"
                >
                    Price,&nbsp;$
                </th>
                <th
                    *tuiHead="'quantity'"
                    colspan="2"
                    tuiTh
                    [sorter]="null"
                >
                    Purchase
                </th>
                <ng-container *tuiHead="'unit'" />
                <th
                    *tuiHead="'date'"
                    rowspan="2"
                    tuiTh
                    [minWidth]="155"
                >
                    Date
                </th>
                <th
                    *tuiHead="'total'"
                    rowspan="2"
                    tuiTh
                    class="number"
                    [sorter]="totalSorter"
                >
                    Total
                </th>
            </tr>
            <tr tuiThGroup>
                <th
                    *tuiHead="'quantity'"
                    tuiTh
                    class="number border"
                >
                    Quantity
                </th>
                <th
                    *tuiHead="'unit'"
                    tuiTh
                >
                    Units
                </th>
            </tr>
        </thead>
        @let sortedPythons = pythons | tuiTableSort;
        <tbody
            heading="Monty Python"
            tuiTbody
            [data]="sortedPythons"
        >
            @for (item of sortedPythons; track trackByIndex($index)) {
                <tr tuiTr>
                    <th
                        *tuiCell="'name'"
                        tuiTd
                        [colSpan]="item.price > 1000 ? 2 : 0"
                    >
                        <tui-textfield>
                            <textarea
                                tuiTextarea
                                [ngModel]="item.name"
                                [ngModelOptions]="options"
                                (ngModelChange)="onValueChange($event, 'name', item, pythons)"
                            ></textarea>
                        </tui-textfield>
                    </th>
                    <ng-container *tuiCell="'price'">
                        @if (item.price <= 1000) {
                            <th
                                tuiTd
                                class="second"
                            >
                                <tui-textfield>
                                    <input
                                        tuiInputNumber
                                        class="number"
                                        [ngModel]="item.price"
                                        [ngModelOptions]="options"
                                        [tuiValidator]="minPrice"
                                        (ngModelChange)="onValueChange($event, 'price', item, pythons)"
                                    />
                                </tui-textfield>
                            </th>
                        }
                    </ng-container>
                    <td
                        *tuiCell="'quantity'"
                        tuiTd
                    >
                        <tui-textfield>
                            <input
                                tuiInputNumber
                                [ngModel]="item.quantity"
                                [ngModelOptions]="options"
                                [tuiNumberFormat]="{precision: 0}"
                                (ngModelChange)="onValueChange($event, 'quantity', item, pythons)"
                            />
                        </tui-textfield>
                    </td>
                    <td
                        *tuiCell="'unit'"
                        tuiTd
                    >
                        <tui-textfield
                            tuiChevron
                            class="select"
                        >
                            <input
                                placeholder="Units"
                                tuiSelect
                                [ngModel]="item.unit"
                                [ngModelOptions]="options"
                                (ngModelChange)="onValueChange($event, 'unit', item, pythons)"
                            />
                            <tui-data-list-wrapper
                                *tuiDropdown
                                [items]="units"
                            />
                        </tui-textfield>
                    </td>
                    <td
                        *tuiCell="'date'"
                        tuiTd
                    >
                        <tui-textfield>
                            <input
                                tuiInputDate
                                [ngModel]="item.date"
                                [ngModelOptions]="options"
                                (ngModelChange)="onValueChange($event, 'date', item, pythons)"
                            />
                            <tui-calendar *tuiDropdown />
                        </tui-textfield>
                    </td>
                    <td
                        *tuiCell="'total'"
                        tuiTd
                        class="number text"
                    >
                        {{ getTotal(item) | tuiFormatNumber }}
                    </td>
                </tr>
            }
        </tbody>
        @let sortedStarwars = starwars | tuiTableSort;
        <tbody
            tuiTbody
            [data]="sortedStarwars"
            [heading]="template"
        >
            @for (item of sortedStarwars; track trackByIndex($index)) {
                <tr tuiTr>
                    <th
                        *tuiCell="'name'"
                        tuiTd
                    >
                        <tui-textfield>
                            <textarea
                                tuiTextarea
                                [ngModel]="item.name"
                                [ngModelOptions]="options"
                                (ngModelChange)="onValueChange($event, 'name', item, starwars)"
                            ></textarea>
                        </tui-textfield>
                    </th>
                    <th
                        *tuiCell="'price'"
                        tuiTd
                        class="second"
                    >
                        <tui-textfield>
                            <input
                                tuiInputNumber
                                [ngModel]="item.price"
                                [ngModelOptions]="options"
                                [tuiValidator]="minPrice"
                                (ngModelChange)="onValueChange($event, 'price', item, starwars)"
                            />
                        </tui-textfield>
                    </th>
                    <td
                        *tuiCell="'quantity'"
                        tuiTd
                    >
                        <tui-textfield>
                            <input
                                tuiInputNumber
                                [ngModel]="item.quantity"
                                [ngModelOptions]="options"
                                [tuiNumberFormat]="{precision: 0}"
                                (ngModelChange)="onValueChange($event, 'quantity', item, starwars)"
                            />
                        </tui-textfield>
                    </td>
                    <td
                        *tuiCell="'unit'"
                        tuiTd
                    >
                        <tui-textfield
                            tuiChevron
                            class="select"
                        >
                            <input
                                placeholder="Units"
                                tuiSelect
                                [ngModel]="item.unit"
                                [ngModelOptions]="options"
                                (ngModelChange)="onValueChange($event, 'unit', item, starwars)"
                            />
                            <tui-data-list-wrapper
                                *tuiDropdown
                                [items]="units"
                            />
                        </tui-textfield>
                    </td>
                    <td
                        *tuiCell="'date'"
                        tuiTd
                    >
                        <tui-textfield>
                            <input
                                tuiInputDate
                                [ngModel]="item.date"
                                [ngModelOptions]="options"
                                (ngModelChange)="onValueChange($event, 'date', item, starwars)"
                            />
                            <tui-calendar *tuiDropdown />
                        </tui-textfield>
                    </td>
                    <td
                        *tuiCell="'total'"
                        tuiTd
                        class="number text"
                    >
                        {{ getTotal(item) | tuiFormatNumber }}
                    </td>
                </tr>
            }
        </tbody>
    </table>
</tui-scrollbar>
<ng-template #template>
    <tui-icon
        icon="@tui.star"
        class="tui-space_right-3"
    />
    Star Wars
</ng-template>
`;export{i as default};
