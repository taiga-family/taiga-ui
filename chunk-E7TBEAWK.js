import"./chunk-HU6DUUP4.js";var i=`<table
    tuiTable
    [style.width.rem]="36"
>
    <caption tuiCaption>
        <span>999 rows</span>
        <button
            appearance="flat"
            tuiButton
            tuiButtonSelect
            type="button"
            [(ngModel)]="size"
        >
            {{ index * size + 1 }}-{{ (index + 1) * size }} rows
            <tui-data-list-wrapper
                *tuiDropdown
                [itemContent]="content"
                [items]="items"
            />
        </button>
        <tui-pagination
            [length]="length"
            [style.float]="'right'"
            [(index)]="index"
        />
    </caption>
    <thead>
        <tr>
            <th tuiTh>Name</th>
            <th tuiTh>Balance</th>
        </tr>
    </thead>
    <tbody tuiTbody>
        @for (item of data; track item) {
            <tr>
                <td tuiTd>{{ item.name }}</td>
                <td tuiTd>{{ item.balance | tuiFormatNumber }}</td>
            </tr>
        }
    </tbody>
</table>
`;export{i as default};
