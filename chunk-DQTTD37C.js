import"./chunk-B4AJQJMI.js";var r=`<tui-doc-page header="Browser support">
    <div
        tuiNotification
        [style.margin-block-end.rem]="1"
    >
        See our
        <a
            href="https://github.com/taiga-family/linters/blob/main/projects/browserslist-config/index.js"
            tuiLink
        >
            browserslist config
        </a>
    </div>
    <ng-template pageTab="Desktop">
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
    </ng-template>
    <ng-template pageTab="Mobile">
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
    </ng-template>
</tui-doc-page>
`;export{r as default};
