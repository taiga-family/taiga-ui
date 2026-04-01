import"./chunk-HU6DUUP4.js";var e=`<tui-doc-page
    header="DropdownSelection"
    package="CORE"
    path="core/portals/dropdown"
    type="directives"
>
    <ng-template pageTab>
        <p>
            <code>DropdownSelection</code>
            shows dropdown with custom template on selected text
        </p>

        <tui-doc-example
            heading="Sample"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="Textarea"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <p
                tuiDropdownSelection
                [tuiDropdown]="dropdownContent"
                [tuiDropdownAlign]="dropdown.align"
                [tuiDropdownDirection]="dropdown.direction"
                [tuiDropdownMaxHeight]="dropdown.maxHeight"
                [tuiDropdownMinHeight]="dropdown.minHeight"
                [tuiDropdownOffset]="dropdown.offset"
                [tuiDropdownSelectionPosition]="position"
                [tuiDropdownSided]="dropdown.dropdownSided"
                [tuiDropdownSidedOffset]="dropdown.dropdownSidedOffset"
            >
                Select a text to
                <strong>see a dropdown</strong>
            </p>
            <ng-template #dropdownContent>
                <div class="dropdown">
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
                name="[tuiDropdownSelection]"
                tuiDocAPIItem
                type="TuiBooleanHandler<Range>"
            >
                <strong>Directive selector</strong>
                . Optional: you can also set a handler that gets
                <code>Range</code>
                and returns show/close dropdown
            </tr>
            <tr
                name="[tuiDropdownSelectionPosition]"
                tuiDocAPIItem
                type="'selection' | 'word' | 'tag'"
                [items]="positionVariants"
                [(value)]="position"
            >
                Position of dropdown near text selection
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
