import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Textarea"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <code>Textarea</code>
        uses
        <code>Textfield</code>
        to create a multi-line string input.

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index) {
                        @case (0) {
                            <span>
                                Component would grow from minimal amount of rows until given maximum number of rows,
                                after which scroll will be introduced.
                            </span>
                        }
                        @case (1) {
                            <span>
                                You can pass limit to enable counter and extra characters highlight. This would also add
                                validator. If you want to hard limit the field you can use native
                                <code>maxLength</code>
                                attribute.
                            </span>
                        }
                        @case (2) {
                            <span>
                                It is possible to override default behavior to introduce your own highlight or other
                                cosmetics.
                            </span>
                        }
                        @case (3) {
                            <span>
                                Being built on top of
                                <code>Textfield</code>
                                , Textarea supports most of the same configurations, such as icons on both sides.
                            </span>
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo [control]="control">
            <ng-template>
                <tui-textfield
                    [iconEnd]="icons.iconEnd"
                    [iconStart]="icons.iconStart"
                    [tuiTextfieldCleaner]="textfieldDoc.cleaner"
                    [tuiTextfieldSize]="textfieldDoc.size"
                >
                    @if (textfieldDoc.size !== 's') {
                        <label tuiLabel>Label</label>
                    }
                    <textarea
                        placeholder="Placeholder"
                        tuiTextarea
                        [focused]="input.focused"
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [max]="max"
                        [min]="min"
                        [readOnly]="controlDoc.readonly"
                        [state]="input.state"
                        [tuiDisabled]="controlDoc.disabled"
                    ></textarea>
                </tui-textfield>
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tbody>
                <tr
                    name="[min]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="min"
                >
                    Minimum number of rows in height
                </tr>
                <tr
                    name="[max]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="max"
                >
                    Maximum number of rows before scroll appears
                </tr>
            </tbody>
            <tbody
                #textfieldDoc
                tuiDocTextfield
            ></tbody>
            <tbody
                #input
                tuiDocInput
            ></tbody>
            <tbody
                #icons
                tuiDocIcons
            ></tbody>
            <tbody
                #controlDoc
                tuiDocControl
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
