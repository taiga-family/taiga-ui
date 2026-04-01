import"./chunk-HU6DUUP4.js";var e=`<tui-doc-page
    header="DropdownContext"
    package="CORE"
    path="core/portals/dropdown"
    type="directives"
>
    <ng-template pageTab>
        <p>
            <code>DropdownContext</code>
            allows to show custom right click context dropdown.
        </p>
        <h3>To close dropdown:</h3>
        <ul class="tui-list tui-list_small">
            <li class="tui-list__item">
                Use
                <strong>Esc</strong>
            </li>
            <li class="tui-list__item">
                Make
                <strong>mouse left/right click</strong>
                outside of dropdown content
            </li>
            <li class="tui-list__item">
                Manually toggle
                <code>tuiDropdown</code>
                to
                <code>false</code>
                using template reference variable (see first example)
            </li>
        </ul>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Context menu"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
            [fullsize]="true"
        />

        <tui-doc-example
            heading="Report mistake form"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <p
                tuiDropdownContext
                [tuiDropdown]="dropdownContent"
                [tuiDropdownAlign]="dropdown.align"
                [tuiDropdownDirection]="dropdown.direction"
                [tuiDropdownMaxHeight]="dropdown.maxHeight"
                [tuiDropdownMinHeight]="dropdown.minHeight"
                [tuiDropdownOffset]="dropdown.offset"
                [tuiDropdownSided]="dropdown.dropdownSided"
                [tuiDropdownSidedOffset]="dropdown.dropdownSidedOffset"
            >
                Right click on me to
                <strong>see a dropdown</strong>
                <ng-template #dropdownContent>Hello there!</ng-template>
            </p>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiDropdown]"
                tuiDocAPIItem
                type="PolymorpheusContent"
            >
                Content
            </tr>
            <tbody
                #dropdown
                tuiDocDropdown
                [hiddenOptions]="['open', 'tuiDropdownEnabled', 'tuiDropdownLimitWidth']"
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{e as default};
