import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Table"
    package="ADDON-TABLE"
    type="components"
>
    <ng-template pageTab>
        <p>This module allows you to create various tables, both static and editable.</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [fullsize]="$index === 4 || $index === 5"
                [heading]="example"
            />
            <ng-template #description>
                @switch ($index) {
                    @case (0) {
                        Most minimalistic usage example.
                    }
                    @case (1) {
                        Using various components within table cells.
                    }
                    @case (2) {
                        Using editable textfield controls inside a table.
                    }
                    @case (3) {
                        Using
                        <code>SortBy</code>
                        directive to work with column titles instead of manual sorters.
                    }
                    @case (4) {
                        Using
                        <code>ScrollingModule</code>
                        from
                        <a
                            href="https://material.angular.io/cdk/scrolling/overview"
                            rel="noreferrer"
                            target="_blank"
                            tuiLink
                        >
                            &#64;angular/cdk/scrolling
                        </a>
                        to implement virtual scroll and
                        <code>tuiSorter</code>
                        pipe for easy sorting by key.
                    }
                    @case (5) {
                        Using structural directives for dynamic columns.
                    }
                    @case (6) {
                        Using
                        <code>caption</code>
                        tag to place pagination at the bottom of the table.
                    }
                    @case (7) {
                        Making column headers draggable at the edge and setting width limits.
                    }
                    @case (8) {
                        Animated expandable sections of the table.
                    }
                    @case (9) {
                        More complex examples of expandable sections.
                    }
                    @case (10) {
                        All unique textfield controls in their table representation.
                    }
                }
            </ng-template>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-accordion>
            <button [tuiAccordion]="true">Directives</button>
            <tui-expand>
                <h2>table[tuiTable]</h2>
                <p>Parent directive that sets the table up.</p>
                <table tuiDocAPI>
                    <tr
                        name="[columns]"
                        tuiDocAPIItem
                        type="readonly string[]"
                    >
                        An array of keys to set up columns order
                    </tr>
                    <tr
                        name="[size]"
                        tuiDocAPIItem
                        type="TuiSizeS | TuiSizeL"
                    >
                        Cells size
                    </tr>
                    <tr
                        name="[(sorter)]"
                        tuiDocAPIItem
                        type="TuiComparator<T>"
                    >
                        Sort function (basic JavaScript array sort API)
                    </tr>
                    <tr
                        name="[(direction)]"
                        tuiDocAPIItem
                        type="-1 | 1"
                    >
                        Direction for sorting
                    </tr>
                </table>

                <hr />

                <h2>thead[tuiThead]</h2>
                <p>
                    Optionally used on
                    <code>thead</code>
                    to make it sticky
                </p>

                <hr />

                <h2>tr[tuiThGroup]</h2>
                <p>
                    Used inside
                    <code>thead</code>
                    to layout headings for the columns. You can have multiple rows and use
                    <code>rowSpan</code>
                    on
                    <code>th</code>
                    elements if you want to create some complex heading for your table.
                </p>
                <p>
                    <strong>
                        Only necessary when you are using structural
                        <code>*tuiHead</code>
                        directives.
                    </strong>
                </p>

                <hr />

                <h2>th[tuiTh]</h2>
                <p>Used inside the heading to style heading cells.</p>
                <table tuiDocAPI>
                    <tr
                        name="[resizable]"
                        tuiDocAPIItem
                        type="boolean"
                    >
                        Makes this column resizable
                    </tr>
                    <tr
                        name="[sorter]"
                        tuiDocAPIItem
                        type="TuiComparator<T> | null"
                    >
                        Sorter function for this column
                    </tr>
                    <tr
                        name="[sticky]"
                        tuiDocAPIItem
                        type="boolean"
                    >
                        Makes heading cell horizontally sticky
                    </tr>
                </table>

                <hr />

                <h2>tbody[tuiTbody]</h2>
                <p>
                    Sets up a group of data. You can have multiple
                    <code>tbody</code>
                    inside your table.
                </p>
                <table tuiDocAPI>
                    <tr
                        name="[data]"
                        tuiDocAPIItem
                        type="readonly T[]"
                    >
                        Data to display
                    </tr>
                    <tr
                        name="[heading]"
                        tuiDocAPIItem
                        type="PolymorpheusContent"
                    >
                        Optional heading content for the group that makes it collapsable
                    </tr>
                    <tr
                        name="[(open)]"
                        tuiDocAPIItem
                        type="boolean"
                    >
                        Open/collapsed state of the group
                    </tr>
                </table>

                <hr />

                <h2>tr[tuiTr]</h2>
                <p>
                    Used inside
                    <code>tbody</code>
                    to layout cells.
                </p>
                <p>
                    <strong>
                        Only necessary when you are using structural
                        <code>*tuiCell</code>
                        directives.
                    </strong>
                </p>

                <hr />

                <h2>td[tuiTd] or th[tuiTd]</h2>
                <p>
                    A cell directive to be placed in
                    <code>tr</code>
                    of
                    <code>tbody</code>
                    . Use it on
                    <code>th</code>
                    if you want to make a sticky column
                </p>
                <p>
                    Textfield controls inside
                    <code>tuiTd</code>
                    are styled to fit table cells. To keep the default textfield look, use
                    <code>tuiTextfieldAppearance="textfield"</code>
                    on control element.
                </p>
            </tui-expand>
            <button tuiAccordion>Structural directives</button>
            <tui-expand>
                <h2>*tuiHead="key"</h2>
                <p>
                    Used to define template for
                    <em>heading</em>
                    for particular key
                </p>
                <p>
                    Goes inside
                    <code>tr[tuiThGroup]</code>
                    element inside
                    <code>thead</code>
                </p>

                <hr />

                <h2>*tuiCell="key"</h2>
                <p>
                    Used to define template for
                    <em>cell</em>
                    for particular key
                </p>
                <p>
                    Goes inside
                    <code>tr[tuiTr]</code>
                    element
                </p>
            </tui-expand>
        </tui-accordion>
    </ng-template>
</tui-doc-page>
`;export{o as default};
