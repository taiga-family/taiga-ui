import"./chunk-42JZD6NG.js";var e=`<table tuiTable>
    <thead>
        <tr>
            <th tuiTh>Name</th>
            <th tuiTh>Balance</th>
        </tr>
    </thead>
    <tbody tuiTbody>
        @for (item of data; track item) {
            <tr tuiTr>
                <td tuiTd>{{ item.name }}</td>
                <td tuiTd>{{ item.balance | tuiFormatNumber }}</td>
            </tr>
        }
    </tbody>
</table>
`;export{e as default};
