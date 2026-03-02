import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Breakpoints"
    package="CORE"
    path="core/styles/variables"
    type="markup"
>
    <ng-template pageTab>
        <p>Breakpoints are widths that determine how your responsive layout behaves across different viewport sizes.</p>

        <table
            tuiTable
            [columns]="columnsNames"
        >
            <caption class="table-caption">Our library includes the following breakpoints:</caption>
            <thead>
                <tr>
                    @for (column of columnsNames; track column) {
                        <th
                            tuiTh
                            class="title"
                        >
                            {{ column }}
                        </th>
                    }
                </tr>
            </thead>
            <tbody
                tuiTbody
                [data]="breakpoints"
            >
                @for (breakpoint of breakpoints; track breakpoint) {
                    <tr tuiTr>
                        <td
                            *tuiCell="'name'"
                            tuiTd
                        >
                            <tui-doc-copy
                                class="copy"
                                [cdkCopyToClipboard]="breakpoint.name"
                            >
                                Copy
                            </tui-doc-copy>
                            {{ breakpoint.name }}
                        </td>
                    </tr>
                }
            </tbody>
        </table>

        <tui-doc-example
            heading="Usage"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab="Setup">
        <ol class="tui-list tui-list_ordered">
            <li class="tui-list__item">
                <p>Add import to your file with styles (SCSS file also has the same variables):</p>

                <tui-doc-code
                    filename="your-file.styles.less"
                    [code]="importTaigaStyleUtils"
                />
            </li>

            <li class="tui-list__item">
                <p>Use breakpoints inside media queries:</p>

                <tui-doc-code
                    filename="your-file.styles.less"
                    [code]="exampleBaseUsage"
                />
            </li>
        </ol>
    </ng-template>
</tui-doc-page>
`;export{a as default};
