import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputYear"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Component to input a single year</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index + 1) {
                        @case (3) {
                            <code>TuiValueTransformer</code>
                            is a great opportunity to override default form control's value format without breaking
                            component's internal logic.
                        }
                        @default {}
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="control">
            <ng-template>
                <tui-textfield
                    [disabledItemHandler]="itemsHandlers.disabledItemHandler()"
                    [tuiDropdownAlign]="dropdown.align"
                    [tuiDropdownAppearance]="dropdown.appearance"
                    [tuiDropdownDirection]="dropdown.direction"
                    [tuiDropdownMaxHeight]="dropdown.maxHeight"
                    [tuiDropdownMinHeight]="dropdown.minHeight"
                    [tuiDropdownOffset]="dropdown.offset"
                    [tuiTextfieldCleaner]="textfieldDoc.cleaner"
                    [tuiTextfieldSize]="textfieldDoc.size"
                >
                    <input
                        placeholder="Put your birthday"
                        tuiInputYear
                        [focused]="input.focused"
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [max]="max"
                        [min]="min"
                        [readOnly]="controlDoc.readonly"
                        [state]="input.state"
                        [tuiDisabled]="controlDoc.disabled"
                    />
                    <tui-calendar-year *tuiDropdown />
                </tui-textfield>
            </ng-template>
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="[min]"
                tuiDocAPIItem
                type="number"
                [items]="minVariants"
                [(value)]="min"
            >
                Minimum year
            </tr>
            <tr
                name="[max]"
                tuiDocAPIItem
                type="number"
                [items]="maxVariants"
                [(value)]="max"
            >
                Maximum year
            </tr>
            <tbody
                #itemsHandlers
                tuiDocItemsHandlers
                [disabledItemHandler]="handler"
                [hiddenOptions]="['stringify', 'identityMatcher']"
            ></tbody>
            <tbody
                #textfieldDoc
                tuiDocTextfield
            ></tbody>
            <tbody
                #input
                tuiDocInput
            ></tbody>
            <tbody
                #dropdown
                tuiDocDropdown
                [hiddenOptions]="['tuiDropdownEnabled', 'limitWidth', 'dropdownSided', 'dropdownSidedOffset']"
            ></tbody>
            <tbody
                #controlDoc
                tuiDocControl
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
