import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="FormatNumber"
    package="CORE"
    type="pipes"
>
    <ng-template pageTab>
        <p>Pipe to format number values to separate thousands</p>

        <p>
            Number formatting can be customized by using
            <a
                fragment="number-format"
                tuiLink
                [routerLink]="routes.Tokens"
            >
                TUI_NUMBER_FORMAT
            </a>
        </p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <div [style.max-width.rem]="20">
            <tui-textfield
                tuiTextfieldSize="m"
                class="tui-space_bottom-4"
            >
                <input
                    tuiInputNumber
                    [formControl]="control"
                />
            </tui-textfield>

            <strong>Formatted number:</strong>
            <br />
            <code>
                {{
                    control.value ?? 0
                        | tuiFormatNumber
                            : {
                                  precision: numberFormatDoc.precision(),
                                  decimalMode: numberFormatDoc.decimalMode(),
                                  rounding: numberFormatDoc.rounding(),
                                  thousandSeparator: numberFormatDoc.thousandSeparator(),
                                  decimalSeparator: numberFormatDoc.decimalSeparator(),
                              }
                }}
            </code>
        </div>
        <table tuiDocAPI>
            <tbody
                #numberFormatDoc
                tuiDocNumberFormat
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
