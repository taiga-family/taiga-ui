import"./chunk-HU6DUUP4.js";var i=`<table tuiTable>
    <thead>
        <tr>
            <th
                tuiTh
                [maxWidth]="300"
                [minWidth]="150"
                [resizable]="true"
            >
                Name
            </th>
            <th
                tuiTh
                [maxWidth]="300"
                [minWidth]="100"
                [resizable]="true"
            >
                Items
            </th>
            <th
                tuiTh
                [maxWidth]="200"
                [minWidth]="100"
                [resizable]="true"
            >
                Balance
            </th>
        </tr>
    </thead>
    <tbody tuiTbody>
        @for (item of data; track item) {
            <tr>
                <td tuiTd>
                    {{ item.name }}
                </td>
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
                            [style.height.%]="100"
                            [(ngModel)]="item.balance"
                        />
                    </tui-textfield>
                </td>
            </tr>
        }
    </tbody>
</table>
`;export{i as default};
