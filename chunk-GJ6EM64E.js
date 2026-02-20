import"./chunk-HU6DUUP4.js";var e=`<tui-doc-page
    header="DropdownOpen"
    package="CORE"
    path="core/portals/dropdown"
    type="directives"
>
    <ng-template pageTab>
        <p>
            <code>DropdownOpen</code>
            is a composite dropdown directive, similar to manual dropdown, but it also takes care of opening and closing
            on its own.
        </p>

        <p>
            If an element is a textfield (
            <code>input</code>
            or
            <code>textarea</code>
            ), arrow down press opens a dropdown. The next press focuses the first item from the list.
        </p>

        <p>
            If it is not a textfield, click opens and closes a dropdown. By default directive is applied to the first
            focusable element inside. If you want another element to be the host, use
            <code>#tuiDropdownHost</code>
            reference.
        </p>

        <p>
            Use
            <code>tuiDropdownAuto</code>
            selector with no binding if you do not want to track open state
        </p>

        <tui-doc-example
            heading="Menu"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />

        <tui-doc-example
            heading="With custom host"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="With link"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
        />

        <tui-doc-example
            heading="Complex example"
            [component]="4 | tuiComponent"
            [content]="4 | tuiExample"
        />

        <tui-doc-example
            heading="Custom positioning"
            [component]="5 | tuiComponent"
            [content]="5 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-textfield
                class="input"
                [tuiDropdownAlign]="dropdown.align"
                [tuiDropdownDirection]="dropdown.direction"
                [tuiDropdownEnabled]="enabled"
                [tuiDropdownLimitWidth]="dropdown.limitWidth"
                [tuiDropdownMaxHeight]="dropdown.maxHeight"
                [tuiDropdownMinHeight]="dropdown.minHeight"
                [tuiDropdownOffset]="dropdown.offset"
                [tuiDropdownSided]="dropdown.dropdownSided"
                [tuiDropdownSidedOffset]="dropdown.dropdownSidedOffset"
                [(open)]="open"
            >
                <label tuiLabel>Start typing</label>
                <input
                    tuiInput
                    [ngModel]="input"
                    (ngModelChange)="onInput($event)"
                />

                <div *tuiDropdown>
                    @if (template) {
                        <div class="dropdown">
                            <div>Do you like using Taiga UI?</div>
                            <p class="buttons">
                                <button
                                    appearance="primary"
                                    size="m"
                                    tuiButton
                                    type="button"
                                    class="button"
                                    (click)="onClick()"
                                >
                                    Yes
                                </button>
                                <button
                                    appearance="secondary"
                                    size="m"
                                    tuiButton
                                    type="button"
                                    class="button"
                                    (click)="onClick()"
                                >
                                    Yes
                                </button>
                            </p>
                        </div>
                    } @else {
                        {{ content }}
                    }
                </div>
            </tui-textfield>
        </tui-doc-demo>
        <ng-template #dropdownContent>
            <div class="dropdown">
                <div>Do you like using Taiga UI?</div>
                <p class="buttons">
                    <button
                        size="m"
                        tuiButton
                        type="button"
                        class="button"
                        (click)="onClick()"
                    >
                        Yes
                    </button>
                    <button
                        appearance="secondary"
                        size="m"
                        tuiButton
                        type="button"
                        class="button"
                        (click)="onClick()"
                    >
                        Yes
                    </button>
                </p>
            </div>
        </ng-template>
        <table tuiDocAPI>
            <tr
                name="[tuiDropdown]"
                tuiDocAPIItem
                type="PolymorpheusContent"
                [items]="contentVariants"
                [(value)]="content"
            >
                Content inside a dropdown
            </tr>
            <tr
                name="[(tuiDropdownOpen)]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="open"
            >
                Content inside a dropdown
            </tr>
            <tbody
                #dropdown
                tuiDocDropdown
                [hiddenOptions]="['open']"
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{e as default};
