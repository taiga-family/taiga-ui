import"./chunk-HU6DUUP4.js";var l=`<tui-textfield iconStart="@tui.search">
    <input
        tuiInput
        [(ngModel)]="search"
    />
    <label tuiLabel>Search</label>
</tui-textfield>

<table class="tui-space_top-4">
    <thead>
        <tr>
            <th>Member</th>
            <th>Nickname</th>
            <th>Fate</th>
        </tr>
    </thead>
    <tbody>
        @for (row of rows; track row) {
            <tr>
                @for (cell of row; track cell) {
                    <td
                        [tuiHighlight]="search"
                        [tuiHighlightColor]="'#228B22'"
                    >
                        {{ cell }}
                    </td>
                }
            </tr>
        }
    </tbody>
</table>
`;export{l as default};
