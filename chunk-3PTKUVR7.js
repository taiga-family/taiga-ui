import"./chunk-42JZD6NG.js";var i=`<table tuiTable>
    <thead>
        <tr tuiThGroup>
            <th
                tuiTh
                [resizable]="true"
            >
                Name
            </th>
            <th
                tuiTh
                [minWidth]="100"
                [resizable]="true"
            >
                Items
            </th>
            <th
                tuiTh
                [resizable]="true"
            >
                Balance
            </th>
            <th tuiTh>Description</th>
        </tr>
    </thead>
    <tbody tuiTbody>
        @for (item of data; track item) {
            <tr>
                <td tuiTd>{{ item.name }}</td>
                <td tuiTd>
                    <tui-textfield multi>
                        <input
                            tuiInputChip
                            [(ngModel)]="item.items"
                        />
                    </tui-textfield>
                </td>
                <td tuiTd>
                    <tui-textfield>
                        <input
                            placeholder="Value"
                            prefix="$"
                            tuiInputNumber
                            [(ngModel)]="item.balance"
                        />
                    </tui-textfield>
                </td>
                <td
                    tuiTd
                    [style.white-space]="'nowrap'"
                >
                    {{ item.description }}
                </td>
            </tr>
        }
    </tbody>
</table>
`;export{i as default};
