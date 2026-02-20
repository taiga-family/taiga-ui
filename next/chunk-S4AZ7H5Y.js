import"./chunk-HU6DUUP4.js";var e=`<table tuiTable>
    <thead>
        <tr>
            <th tuiTh>Options</th>
        </tr>
    </thead>
    <tbody tuiTbody>
        <tr>
            <td tuiTd>
                <tui-textfield
                    multi
                    tuiChevron
                >
                    <label tuiLabel>Multi Select with dropdown</label>
                    <input
                        placeholder="Pick from the list"
                        tuiInputChip
                        tuiSelectLike
                        [formControl]="multiControl"
                        [style.width.rem]="5"
                    />
                    <tui-data-list-wrapper
                        *tuiDropdown
                        tuiMultiSelectGroup
                        [items]="items"
                    />
                </tui-textfield>
            </td>
        </tr>
        <tr>
            <td tuiTd>
                <tui-textfield multi>
                    <label tuiLabel>Multi Select</label>
                    <input
                        placeholder="Placeholder"
                        tuiInputChip
                        [formControl]="multiControl2"
                    />
                </tui-textfield>
            </td>
        </tr>
    </tbody>
</table>
`;export{e as default};
