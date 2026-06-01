import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page
    header="Pincode"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            />
            <ng-template #description>
                @switch ($index) {
                    @case (1) {
                        Masked mode via
                        <code>type="password"</code>
                        \u2014 entered digits render as filled dots
                    }
                    @case (2) {
                        <strong>Fast loading</strong>
                        \u2014 response under 500ms. Enter
                        <code>1234</code>
                        for success, any other code for error
                    }
                    @case (3) {
                        <strong>Long loading</strong>
                        \u2014 response over 700ms, auto-bounce while waiting. Enter
                        <code>1234</code>
                        for success, any other code for error
                    }
                    @case (4) {
                        <strong>Desktop dialog</strong>
                        with auto-focused input and full verification flow. Same logic as Mobile, native keyboard input.
                        Enter
                        <code>1234</code>
                        for successful validation
                    }
                    @case (5) {
                        <strong>Mobile bottom sheet</strong>
                        with a custom numeric pad and full verification flow \u2014
                        <code>inputmode="none"</code>
                        suppresses the native keyboard. Enter
                        <code>1234</code>
                        for successful validation; wrong code triggers shake-clear-retry
                    }
                }
            </ng-template>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-textfield>
                <input
                    tuiPincode
                    [formControl]="control"
                    [invalid]="invalid()"
                    [maxLength]="length"
                    [type]="type()"
                    (confirmed)="confirmed.emitEvent($event)"
                    (finished)="finished.emitEvent($event); onFinished()"
                />
            </tui-textfield>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="type"
                tuiDocAPIItem
                type="string"
                [items]="typeVariants"
                [value]="type()"
                (valueChange)="type.set($event ?? 'text')"
            >
                Native input type.
                <code>"password"</code>
                masks each digit as a filled dot
            </tr>
            <tr
                name="[invalid]"
                tuiDocAPIItem
                type="boolean | null"
                [items]="invalidVariants"
                [(value)]="invalid"
            >
                Verification result.
                <code>null</code>
                \u2014 pending pulse,
                <code>false</code>
                \u2014 success animation,
                <code>true</code>
                \u2014 shake and auto-clear
            </tr>
            <tr
                name="maxLength"
                tuiDocAPIItem
                type="number"
                [min]="1"
                [(value)]="length"
            >
                Number of cells. Pending animation triggers once value reaches this length
            </tr>
            <tr
                #confirmed
                name="(confirmed)"
                tuiDocAPIItem
                type="void"
            >
                Fires after the success wave, before dots collapse. Use to reveal a loader for the next-step transition
            </tr>
            <tr
                #finished
                name="(finished)"
                tuiDocAPIItem
                type="void"
            >
                Fires at the end of the verification cycle \u2014 after success collapse or after invalid shake + auto-clear
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{o as default};
