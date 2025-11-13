import"./chunk-42JZD6NG.js";var r=`<table
    tuiTable
    [style.width.%]="100"
>
    <thead>
        <tr tuiThGroup>
            <th tuiTh>Name</th>
            <th tuiTh>Price</th>
        </tr>
    </thead>
    <tbody tuiTbody>
        @for (control of controls; track $index) {
            <tr tuiTr>
                <td tuiTd>{{ data[$index]?.name }}</td>
                <td tuiTd>
                    <tui-textfield>
                        <input
                            placeholder="Price"
                            tuiHintDirection="right"
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
`;export{r as default};
