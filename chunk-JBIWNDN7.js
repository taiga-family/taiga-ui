import"./chunk-HU6DUUP4.js";var e=`<tui-doc-page
    header="Dropdown"
    package="CORE"
    path="core/portals/dropdown"
    type="directives"
>
    <ng-template pageTab>
        <div class="tui-space_bottom-3">
            <code>tuiDropdown</code>
            shows a dropdown with custom template. Use
            <a
                tuiLink
                [routerLink]="routes.ActiveZone"
            >
                ActiveZone
            </a>
            directive to hide dropdown.
        </div>

        <p>
            See also
            <a
                tuiLink
                [routerLink]="routes.DropdownOpen"
            >
                DropdownOpen
            </a>
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            >
                @if ($index === 3) {
                    <div
                        tuiNotification
                        class="tui-space_bottom-3"
                    >
                        Use unencapsulated styles to customize dropdown appearance
                    </div>
                }
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <span (tuiActiveZoneChange)="onActiveZone($event)">
                <button
                    tuiButton
                    type="button"
                    [tuiDropdown]="dropdownContent"
                    [tuiDropdownAlign]="dropdown.align"
                    [tuiDropdownDirection]="dropdown.direction"
                    [tuiDropdownLimitWidth]="dropdown.limitWidth"
                    [tuiDropdownManual]="open"
                    [tuiDropdownMaxHeight]="dropdown.maxHeight"
                    [tuiDropdownMinHeight]="dropdown.minHeight"
                    [tuiDropdownOffset]="dropdown.offset"
                    [tuiDropdownSided]="dropdown.dropdownSided"
                    [tuiDropdownSidedOffset]="dropdown.dropdownSidedOffset"
                    (click)="onClick()"
                    (tuiObscured)="onObscured($event)"
                >
                    PRESS!
                    <i>* There is also a pretty long text to check its width limitations</i>
                </button>
                <ng-template #dropdownContent>
                    <div [style.padding.rem]="1">
                        Here can be any content
                        <p>You can even insert other components:</p>
                        <button
                            tuiButton
                            type="button"
                        >
                            Do not touch!
                        </button>
                        <p>Everything you want... *</p>
                        <sub>* except cases of human rights violation</sub>
                    </div>
                </ng-template>
            </span>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiDropdownManual]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="open"
            >
                Show dropdown (basic manual implementation, see related pages for other options)
            </tr>
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
                [hiddenOptions]="['open', 'tuiDropdownEnabled']"
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{e as default};
