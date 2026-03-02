import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Input"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <div>Input is a basic string textfield. All other input components are built on its basis.</div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            />
            <ng-template #description>
                @switch ($index) {
                    @case (0) {
                        <span>Basic string value input.</span>
                    }
                    @case (1) {
                        <span>
                            You can change states of the component manually or it can follow state of a form control
                            when Angular form directives are applied to it.
                        </span>
                    }
                    @case (2) {
                        <span>
                            For more complex dropdown controls it is recommended to use dedicated components, such as
                            <a
                                tuiLink
                                [routerLink]="routes.Select"
                            >
                                Select
                            </a>
                            or
                            <a
                                tuiLink
                                [routerLink]="routes.ComboBox"
                            >
                                ComboBox
                            </a>
                        </span>
                    }
                    @case (3) {
                        An example of a password textfield with an interactive icon to toggle the input type.
                    }
                    @case (4) {
                        If you need to perform some additional actions or logging when user clicks cleaner button.
                    }
                    @case (5) {
                        <div>
                            We recommends using
                            <a
                                href="https://maskito.dev"
                                target="_blank"
                                tuiLink
                            >
                                Maskito
                            </a>
                            for input masking.
                            <strong>Maskito</strong>
                            is supported by
                            <a
                                tuiLink
                                [routerLink]="routes.About"
                            >
                                Taiga\xA0Family
                            </a>
                            team and it is already peer-dependency of
                            <code>&#64;taiga-ui/kit</code>
                            library.
                            <p class="tui-space_bottom-0">
                                This example demonstrates how to use built-in
                                <a
                                    href="https://maskito.dev/kit/number"
                                    target="_blank"
                                    tuiLink
                                >
                                    Number
                                </a>
                                mask with postfix and augment it by several
                                <strong>Maskito</strong>
                                plugins.
                            </p>
                        </div>
                    }
                }
            </ng-template>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-textfield
                #textfieldEl
                [content]="!textfieldEl.focused() && value ? textfield.content : ''"
                [filler]="filler"
                [iconEnd]="icons.iconEnd"
                [iconStart]="icons.iconStart"
                [tuiTextfieldCleaner]="textfield.cleaner"
                [tuiTextfieldSize]="textfield.size"
            >
                @if (textfield.size !== 's') {
                    <label tuiLabel>I am a label</label>
                }
                <input
                    placeholder="I am placeholder"
                    tuiInput
                    [disabled]="control.disabled"
                    [focused]="input.focused"
                    [invalid]="control.invalid"
                    [readOnly]="control.readonly"
                    [state]="input.state"
                    [(ngModel)]="value"
                />
                <tui-icon tuiTooltip="I am a hint" />
            </tui-textfield>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[(ngModel)]"
                tuiDocAPIItem
                type="string"
                [(value)]="value"
            >
                Value (or reactive control directives)
            </tr>
            <tr
                name="[filler]"
                tuiDocAPIItem
                type="string"
                [(value)]="filler"
            >
                Filler
            </tr>
            <tbody
                #control
                tuiDocControl
            ></tbody>
            <tbody
                #input
                tuiDocInput
            ></tbody>
            <tbody
                #textfield
                tuiDocTextfield
            ></tbody>
            <tbody
                #icons
                tuiDocIcons
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
