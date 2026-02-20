import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="InputChip"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <code>InputChip</code>
        uses specifically modified
        <a
            tuiLink
            [routerLink]="routes.Input"
        >
            Input
        </a>
        to represent array of selectable items.

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
                                <code>Textfield[multi]</code>
                                is used to display array of items. By default they are presented as plain strings.
                            </span>
                        }
                        @case (1) {
                            <span>
                                Use
                                <code>*tuiItem</code>
                                directive to provide custom representation. You can use
                                <code>tui-input-chip</code>
                                out of the box or implement your own. The context is
                                <code>TuiContext&lt;&#123; item: T, index: number &#125;&gt;</code>
                            </span>
                        }
                        @case (2) {
                            <span>
                                Individual tags can be disabled using
                                <code>disabledItemHandler</code>
                                , this would prevent them from being edited, removed or added.
                                <strong>Note:</strong>
                                keep in mind cleaner would still empty the control. If you want a different behavior,
                                you can disable built-in cleaner and provide your own.
                            </span>
                        }
                        @case (3) {
                            <span>
                                <code>InputChip</code>
                                can be used together with dropdown in many variations showcased below, from multiple
                                values input with suggestions to multi-select without writable input.
                            </span>
                        }
                        @case (4) {
                            <span>
                                You can customize many aspects of the component, from standard textfield options like
                                icons and tooltips to changing the appearance of each individual chip.
                            </span>
                        }
                        @case (5) {
                            <span>
                                Component can be used with
                                <a
                                    href="https://maskito.dev"
                                    rel="noreferrer noopener"
                                    target="_blank"
                                    tuiLink
                                >
                                    Maskito
                                </a>
                                to facilitate input masking.
                            </span>
                        }
                        @case (6) {
                            <span>Component can be used together with RTL direction.</span>
                        }
                        @case (7) {
                            <span>You can improve UX on mobile devices in multiple ways, depending on your case.</span>
                        }
                        @case (9) {
                            <span>Using virtual scroll to improve UX when working with large amount of items.</span>
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
                    multi
                    [iconEnd]="icons.iconEnd"
                    [iconStart]="icons.iconStart"
                    [rows]="textfieldDoc.rows"
                    [tuiTextfieldCleaner]="textfieldDoc.cleaner"
                    [tuiTextfieldSize]="textfieldDoc.size"
                >
                    <input
                        placeholder="Enter"
                        tuiInputChip
                        [focused]="input.focused"
                        [formControl]="control"
                        [invalid]="controlDoc.invalid"
                        [readOnly]="controlDoc.readonly"
                        [separator]="separator"
                        [state]="input.state"
                        [tuiDisabled]="controlDoc.disabled"
                        [unique]="unique"
                    />
                    <tui-input-chip *tuiItem />
                </tui-textfield>
            </ng-template>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tbody>
                <tr
                    name="[unique]"
                    tuiDocAPIItem
                    type="boolean"
                    [(value)]="unique"
                >
                    Ability to enter unique or non-unique tags
                </tr>
                <tr
                    name="[separator]"
                    tuiDocAPIItem
                    type="string"
                    [(value)]="separator"
                >
                    String or RegExp to separate tags
                </tr>
            </tbody>

            <tbody
                #textfieldDoc
                tuiDocTextfield
                [hiddenOptions]="[]"
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
