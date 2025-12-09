import"./chunk-42JZD6NG.js";var r=`<tui-doc-page header="Browser support">
    <h2 class="tui-text_h4 tui-space_top-0 tui-space_bottom-3">Desktop</h2>
    <table tuiTable>
        <thead tuiThead>
            <tr>
                <th tuiTh>Browser</th>
                <th tuiTh>Version</th>
            </tr>
        </thead>
        <tbody tuiTbody>
            @for (browser of desktopBrowsers; track browser) {
                <tr>
                    <td tuiTd>{{ browser.name }}</td>
                    <td tuiTd>
                        @if (browser.version) {
                            {{ browser.version }}
                        } @else {
                            <strong>Not supported</strong>
                        }
                    </td>
                </tr>
            }
        </tbody>
    </table>
    <h2 class="tui-text_h4 tui-space_top-6 tui-space_bottom-3">Mobile</h2>
    <table tuiTable>
        <thead>
            <tr>
                <th tuiTh>Browser</th>
                <th tuiTh>Version</th>
            </tr>
        </thead>
        <tbody tuiTbody>
            @for (browser of mobileBrowsers; track browser) {
                <tr>
                    <td tuiTd>{{ browser.name }}</td>
                    <td tuiTd>{{ browser.version }}</td>
                </tr>
            }
        </tbody>
    </table>

    <div
        tuiNotification
        class="tui-space_top-3"
    >
        See our
        <a
            href="https://github.com/taiga-family/linters/blob/main/projects/browserslist-config/index.js"
            tuiLink
        >
            browserslist config
        </a>
    </div>
</tui-doc-page>
`;export{r as default};
