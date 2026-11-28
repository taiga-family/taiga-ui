import"./chunk-LQ6M4NCU.js";var a=`<button
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
    class="add-row"
    (click)="addRows()"
>
    Add row
</button>

<table
    tuiTable
    class="table"
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
`;export{a as default};
