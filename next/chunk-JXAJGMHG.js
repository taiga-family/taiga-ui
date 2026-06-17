import"./chunk-HU6DUUP4.js";var r=`@for (row of rows(); track row.color) {
    <tr class="color">
        <td>
            <h3 class="name">
                <tui-doc-copy
                    class="copy"
                    [cdkCopyToClipboard]="\`var(\${row.color})\`"
                >
                    Copy
                </tui-doc-copy>
                {{ row.color }}
            </h3>
        </td>

        <td class="circle">
            <div
                class="demo"
                [style.background]="\`var(\${row.color})\`"
            ></div>
        </td>

        <td>
            <div class="value">
                <tui-doc-copy
                    class="copy"
                    [cdkCopyToClipboard]="row.value"
                >
                    Copy
                </tui-doc-copy>
                {{ row.value }}
            </div>
        </td>
    </tr>
}
`;export{r as default};
