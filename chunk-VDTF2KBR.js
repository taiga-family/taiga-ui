import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="Error"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <div>
            Component for showing arbitrary messages styled as errors, with height and fade transition, as well as
            displaying form validation errors from controls
        </div>

        @for (example of examples; track $index) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index) {
                        @case (0) {
                            Using as standalone or to display validation errors from form control.
                        }
                        @case (1) {
                            Providing validation error messages for various errors with DI token.
                        }
                        @case (2) {
                            Using
                            <code>ng-template</code>
                            to show rich HTML error messages.
                        }
                        @case (3) {
                            Using with dynamic
                            <code>FormArray</code>
                        }
                        @case (4) {
                            Displaying error message via async validators.
                        }
                        @case (5) {
                            Using pipe to feed error message to the hint directive.
                        }
                        @case (6) {
                            Reusable error messages with a dedicated component.
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-error [error]="error" />
        </tui-doc-demo>

        <ng-template #errorContent>
            Error with
            <em>
                <strong>HTML</strong>
            </em>
        </ng-template>

        <table tuiDocAPI>
            <tr
                name="[error]"
                tuiDocAPIItem
                type="TuiValidationError | string | null"
                [items]="errorVariants"
                [(value)]="selectedError"
            >
                Error value (string or TuiValidationError)
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{t as default};
