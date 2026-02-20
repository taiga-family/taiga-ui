import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page header="Browser support">
    <div
        appearance="neutral"
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

        @if (response(); as meta) {
            <div class="meta">
                <div tuiBadge>Total: {{ meta.coverage | number: '1.0-2' }}%</div>
                <div tuiBadge>Updated: {{ meta.updated | date: 'medium' }}</div>
                <div tuiBadge>browserslist {{ meta.versions.browserslist }}</div>
                <div tuiBadge>caniuse {{ meta.versions.caniuse }}</div>
            </div>
        }
    </div>

    <table
        tuiTable
        class="table"
        [columns]="columns"
    >
        <colgroup>
            <col class="col-toggle" />
            <col />
            <col class="col-min" />
            <col class="col-total" />
        </colgroup>

        <tbody
            tuiTbody
            [data]="data()"
        >
            @for (item of data(); track item.id) {
                <tr tuiTr>
                    <td
                        *tuiCell="'toggle'"
                        tuiTd
                        class="toggle-cell"
                    >
                        @if (item.children.length > 1) {
                            <button
                                appearance="flat-grayscale"
                                size="xs"
                                tuiIconButton
                                type="button"
                                [tuiChevron]="rowState[item.id] ?? false"
                                (click)="toggleRow(item.id)"
                            >
                                Toggle
                            </button>
                        }
                    </td>

                    <td
                        *tuiCell="'browser'"
                        tuiTd
                    >
                        <div class="show-browser">
                            <img
                                [alt]="item.id"
                                [src]="\`assets/browsers/\${item.id}.svg\`"
                            />

                            {{ item.name }}
                        </div>
                    </td>

                    <td
                        *tuiCell="'min'"
                        tuiTd
                        class="min-cell"
                    >
                        {{ item.minVersion }}
                    </td>

                    <td
                        *tuiCell="'total'"
                        tuiTd
                        class="coverage-cell total-cell"
                        [style.--coverage]="item.coverage"
                    >
                        {{ item.coverage }}%
                    </td>
                </tr>

                @if (item.children.length > 1) {
                    <tui-table-expand [expanded]="rowState[item.id] ?? false">
                        @for (child of item.children; track child.version) {
                            <tr
                                tuiTr
                                class="child"
                            >
                                <td
                                    *tuiCell="'toggle'"
                                    tuiTd
                                    class="toggle-cell"
                                ></td>
                                <td
                                    *tuiCell="'browser'"
                                    tuiTd
                                ></td>

                                <td
                                    *tuiCell="'min'"
                                    tuiTd
                                    class="min-cell"
                                >
                                    {{ child.version }}
                                </td>

                                <td
                                    *tuiCell="'total'"
                                    tuiTd
                                    class="coverage-cell total-cell"
                                    [style.--coverage]="child.coverage"
                                >
                                    {{ child.coverage }}%
                                </td>
                            </tr>
                        }
                    </tui-table-expand>
                }
            }
        </tbody>
    </table>
</tui-doc-page>
`;export{i as default};
