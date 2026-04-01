import"./chunk-HU6DUUP4.js";var l=`@for (color of colors(); track color) {
    <tr class="color">
        @if (getValue(color, platform.tuiPlatform(), darkMode()); as value) {
            <td>
                <h3 class="name">
                    <tui-doc-copy
                        class="copy"
                        [cdkCopyToClipboard]="\`var(\${color})\`"
                    >
                        Copy
                    </tui-doc-copy>
                    {{ color }}
                </h3>
            </td>
            <td class="circle">
                <div
                    class="demo"
                    [style.background]="\`var(\${color})\`"
                ></div>
            </td>
            <td>
                <div class="value">
                    <tui-doc-copy
                        class="copy"
                        [cdkCopyToClipboard]="value"
                    >
                        Copy
                    </tui-doc-copy>
                    {{ value }}
                </div>
            </td>
        }
    </tr>
}
`;export{l as default};
