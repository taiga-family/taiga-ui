import"./chunk-42JZD6NG.js";var e=`<table
    tuiTable
    class="table"
    [columns]="columns"
>
    <thead>
        <tr tuiThGroup>
            <th tuiTh></th>
            <th
                tuiTh
                [minWidth]="50"
            >
                #
            </th>
            <th
                tuiTh
                [minWidth]="150"
            >
                Name
            </th>
            <th
                tuiTh
                [minWidth]="150"
            >
                Date of Birth
            </th>
            <th tuiTh>Age</th>
        </tr>
    </thead>
    <tbody
        tuiTbody
        [data]="data"
    >
        @for (item of data; track $index; let i = $index) {
            <tr tuiTr>
                <td
                    *tuiCell="'children'"
                    tuiTd
                >
                    <button
                        appearance="flat-grayscale"
                        size="xs"
                        tuiIconButton
                        type="button"
                        class="chevron-btn"
                        [attr.title]="item.children?.length ? '' : 'No children'"
                        [disabled]="!item.children?.length"
                        [style.border-radius.%]="100"
                        [tuiChevron]="rowState[i] ?? false"
                        (click)="toggleRow(i)"
                    >
                        Toggle
                    </button>
                </td>
                <td
                    *tuiCell="'#'"
                    tuiTd
                >
                    {{ i + 1 }}
                </td>
                <td
                    *tuiCell="'name'"
                    tuiTd
                >
                    {{ item.name }}
                </td>
                <td
                    *tuiCell="'dob'"
                    tuiTd
                >
                    {{ item.dob }}
                </td>
                <td
                    *tuiCell="'age'"
                    tuiTd
                >
                    {{ item.age }}
                </td>
            </tr>

            @if (item.children?.length) {
                <tui-table-expand [expanded]="rowState[i] ?? false">
                    @for (child of item.children; track $index; let j = $index) {
                        <tr
                            tuiTr
                            class="child"
                        >
                            <td
                                *tuiCell="'children'"
                                tuiTd
                            ></td>
                            <td
                                *tuiCell="'#'"
                                tuiTd
                            >
                                {{ i + 1 }}.{{ j + 1 }}
                            </td>
                            <td
                                *tuiCell="'name'"
                                tuiTd
                            >
                                {{ child.name }}
                            </td>
                            <td
                                *tuiCell="'dob'"
                                tuiTd
                            >
                                {{ child.dob }}
                            </td>
                            <td
                                *tuiCell="'age'"
                                tuiTd
                            >
                                {{ child.age }}
                            </td>
                        </tr>
                    }
                </tui-table-expand>
            }
        }
    </tbody>
</table>
`;export{e as default};
