import"./chunk-HU6DUUP4.js";var d=`<table tuiTable>
    <thead>
        <tr>
            <th tuiTh></th>
            <th tuiTh>#</th>
            <th tuiTh>Name</th>
            <th tuiTh>Date of Birth</th>
        </tr>
    </thead>
    <tbody tuiTbody>
        @for (item of data; track $index; let i = $index) {
            <tr>
                <td tuiTd>
                    <button
                        appearance="flat-grayscale"
                        size="xs"
                        tuiIconButton
                        type="button"
                        [attr.title]="item.children.length ? null : 'No children'"
                        [disabled]="!item.children.length"
                        [style.border-radius.%]="100"
                        [tuiChevron]="state[i] ?? false"
                        (click)="state[i] = !state[i]"
                    >
                        Toggle
                    </button>
                </td>
                <td tuiTd>{{ i + 1 }}</td>
                <td tuiTd>{{ item.name }}</td>
                <td tuiTd>{{ item.dob }}</td>
            </tr>

            @if (item.children.length) {
                <tui-table-expand [expanded]="state[i] ?? false">
                    @for (child of item.children; track $index; let j = $index) {
                        <tr>
                            <td tuiTd></td>
                            <td tuiTd>{{ i + 1 }}.{{ j + 1 }}</td>
                            <td tuiTd>{{ child.name }}</td>
                            <td tuiTd>{{ child.dob }}</td>
                        </tr>
                    }
                </tui-table-expand>
            }
        }
    </tbody>
</table>
`;export{d as default};
