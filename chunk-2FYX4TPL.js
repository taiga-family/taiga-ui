import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Dialog"
    package="CORE"
    path="core/portals/dialog"
    type="components"
>
    <ng-template pageTab>
        <div>Customizable modal dialogs</div>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample: 'html,ts,less' : this[$index]"
                [description]="description"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index) {
                        @case (0) {
                            Basic string dialog with a customizable button.
                        }
                        @case (1) {
                            Using declarative directive to layout and show a dialog.
                        }
                        @case (2) {
                            Reusing a component to show a dialog.
                        }
                        @case (3) {
                            Using bundled component for action confirmation.
                        }
                        @case (4) {
                            Providing a custom stream to close dialogs.
                        }
                        @case (5) {
                            Using built-in
                            <code>fullscreen</code>
                            appearance
                        }
                        @case (6) {
                            Customizing look and animations of dialogs by augmenting built-in appearance or completely
                            overriding it.
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <button
                size="m"
                tuiButton
                type="button"
                (click)="showDialog(template)"
            >
                Show
            </button>
        </tui-doc-demo>
        <ng-template
            #template
            let-completeWith="completeWith"
            let-data="data"
            let-observer
        >
            <form
                tuiForm
                (submit.prevent)="completeWith(input.value)"
            >
                <tui-textfield>
                    <label tuiLabel>Your name</label>
                    <input
                        #input
                        tuiAutoFocus
                        tuiInput
                        [value]="data"
                    />
                </tui-textfield>
                <footer>
                    <button
                        appearance="secondary"
                        tuiButton
                        type="button"
                        (click)="observer.complete()"
                    >
                        Cancel
                    </button>
                    <button
                        tuiButton
                        type="submit"
                    >
                        Submit
                    </button>
                </footer>
            </form>
        </ng-template>
        <table tuiDocAPI>
            <tr
                name="[appearance]"
                tuiDocAPIItem
                type="string"
                [items]="appearances"
                [(value)]="appearance"
            >
                Appearance of dialog
            </tr>
            <tr
                name="[closable]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="closable"
            >
                Show a cross to close dialog.

                <p>
                    Pass
                    <code [textContent]="'Observable<boolean>'"></code>
                    if you want prevent closing, for example, with a confirmation prompt. Be careful, passing
                    <code [textContent]="'Observable<boolean>'"></code>
                    will always display cross button even if it emits
                    <code>false</code>
                    value!
                </p>
            </tr>
            <tr
                name="[dismissible]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="dismissible"
            >
                Dialog can be canceled with Escape key or with a click outside. Pass
                <code [textContent]="'Observable<boolean>'"></code>
                if you want prevent closing, for example, with a confirmation prompt.
            </tr>
            <tr
                name="[data]"
                tuiDocAPIItem
                type="string"
                [(value)]="data"
            >
                Input data for dialog, arbitrary type
                <code [textContent]="'<I>'"></code>
            </tr>
            <tr
                name="[label]"
                tuiDocAPIItem
                type="string"
                [(value)]="label"
            >
                Heading of dialog
            </tr>
            <tr
                name="[required]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="required"
            >
                Cross click, overlay click or Escape click emits an error into
                <code>Observable</code>
                (you can catch it with "catch" operator or onError handler)
            </tr>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeS | TuiSizeL"
                [items]="sizes"
                [(value)]="size"
            >
                Size
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
