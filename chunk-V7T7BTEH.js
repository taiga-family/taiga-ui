import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="DropdownHover"
    package="CORE"
    path="core/portals/dropdown"
    type="directives"
>
    <ng-template pageTab>
        <div>
            <code>DropdownHover</code>
            shows dropdown with custom template upon hover
        </div>

        @for (example of examples; track $index) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
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
`;export{t as default};
