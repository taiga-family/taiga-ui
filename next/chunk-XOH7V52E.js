import"./chunk-42JZD6NG.js";var e=`<table
    tuiTable
    class="table"
    [columns]="columns"
>
    <thead>
        <tr tuiThGroup>
            <th
                tuiTh
                [maxWidth]="500"
                [minWidth]="200"
                [resizable]="true"
            >
                Name
            </th>
            <th tuiTh>Balance</th>
        </tr>
    </thead>
    <tbody
        tuiTbody
        [data]="data"
    >
        @for (item of data; track item) {
            <tr tuiTr>
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
`;export{e as default};
