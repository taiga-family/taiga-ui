import"./chunk-HU6DUUP4.js";var u=`<button
    size="s"
    tuiButton
    type="button"
    (click)="addColumn()"
>
    Add column
</button>
<button
    size="s"
    tuiButton
    type="button"
    class="tui-space_left-2"
    (click)="addRows()"
>
    Add row
</button>

<table
    tuiTable
    class="table tui-space_top-3"
    [columns]="columns"
>
    <thead>
        <tr tuiThGroup>
            @for (col of columns; track col) {
                <th
                    *tuiHead="col"
                    tuiTh
                >
                    {{ col }}
                </th>
            }
        </tr>
    </thead>
    @let sortedData = data | tuiTableSort;
    <tbody
        tuiTbody
        [data]="sortedData"
    >
        @for (item of sortedData; track item) {
            <tr tuiTr>
                @for (col of columns; track col) {
                    <td
                        *tuiCell="col"
                        tuiTd
                    >
                        {{ item[col] }}
                    </td>
                }
            </tr>
        }
    </tbody>
</table>
`;export{u as default};
