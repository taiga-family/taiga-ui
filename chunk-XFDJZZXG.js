import"./chunk-HU6DUUP4.js";var e=`<table
    tuiTable
    [style.width.%]="100"
>
    <thead>
        <tr>
            <th tuiTh>Name</th>
            <th tuiTh>Price</th>
        </tr>
    </thead>
    <tbody tuiTbody>
        @for (control of controls; track $index) {
            <tr>
                <td tuiTd>{{ data[$index]?.name }}</td>
                <td tuiTd>
                    <tui-textfield>
                        <input
                            placeholder="Price"
                            tuiHintDirection="end"
                            tuiInputNumber
                            [formControl]="control"
                            [prefix]="'USD' | tuiCurrency"
                            [tuiHint]="[] | tuiError"
                        />
                    </tui-textfield>
                </td>
            </tr>
        }
    </tbody>
</table>
`;export{e as default};
