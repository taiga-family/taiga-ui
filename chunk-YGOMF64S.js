import"./chunk-B4AJQJMI.js";var e=`<tui-doc-page
    header="DropdownHover"
    package="CORE"
    path="core/portals/dropdown"
    type="directives"
>
    <ng-template pageTab>
        <p>
            <code>DropdownHover</code>
            shows dropdown with custom template upon hover
        </p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="With DropdownOpen"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="Nested"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />
        <tui-doc-example
            heading="With custom host"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />

        <tui-doc-example
            heading="With DropdownMobile"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <p
                tuiDropdownHover
                [tuiDropdown]="dropdownContent"
                [tuiDropdownAlign]="dropdown.align"
                [tuiDropdownDirection]="dropdown.direction"
                [tuiDropdownHideDelay]="hideDelay"
                [tuiDropdownLimitWidth]="dropdown.limitWidth"
                [tuiDropdownMaxHeight]="dropdown.maxHeight"
                [tuiDropdownMinHeight]="dropdown.minHeight"
                [tuiDropdownOffset]="dropdown.offset"
                [tuiDropdownShowDelay]="showDelay"
                [tuiDropdownSided]="dropdown.dropdownSided"
                [tuiDropdownSidedOffset]="dropdown.dropdownSidedOffset"
            >
                Hover pointer over
                <strong>to see a dropdown</strong>
            </p>
            <ng-template #dropdownContent>
                <div [style.padding.rem]="1">
                    Here you can have any content
                    <p>You can select a text inside a dropdown and it will not close a dropdown</p>
                    <button
                        tuiButton
                        type="button"
                    >
                        Button
                    </button>
                </div>
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiDropdown]"
                tuiDocAPIItem
                type="PolymorpheusContent"
            >
                Content
            </tr>
            <tr
                name="[tuiDropdownShowDelay]"
                tuiDocAPIItem
                type="number"
                [(value)]="showDelay"
            >
                Show delay for dropdown appearance after hover
            </tr>
            <tr
                name="[tuiDropdownHideDelay]"
                tuiDocAPIItem
                type="number"
                [(value)]="hideDelay"
            >
                Show delay for dropdown appearance after hover
            </tr>
            <tbody
                #dropdown
                tuiDocDropdown
                [hiddenOptions]="['open', 'tuiDropdownEnabled']"
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{e as default};
