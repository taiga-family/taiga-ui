import"./chunk-HU6DUUP4.js";var i=`<table
    tuiTable
    [style.width.rem]="17"
>
    <thead>
        <tr>
            <th tuiTh>Name</th>
            <th tuiTh>Sum, $</th>
        </tr>
    </thead>
    <tbody tuiTbody>
        @for (item of items | tuiFilter: matcher : 300; track item) {
            <tr>
                <td tuiTd>{{ item.name }}</td>
                <td tuiTd>{{ item.price }}</td>
            </tr>
        }
    </tbody>
</table>
`;export{i as default};
