import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Stepper"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-stepper
                [orientation]="orientation"
                [(activeItemIndex)]="activeItemIndex"
            >
                <button tuiStep>Simple step</button>
                <button tuiStep>Simple step</button>
                <button
                    tuiStep
                    [icon]="icon"
                    [stepState]="state"
                >
                    Simple step
                </button>
                <button tuiStep>Simple step</button>
                <button tuiStep>Simple step</button>
            </tui-stepper>
        </tui-doc-demo>
        <h3>Stepper</h3>
        <table tuiDocAPI>
            <tr
                name="[orientation]"
                tuiDocAPIItem
                type="TuiOrientation"
                [items]="orientationVariants"
                [(value)]="orientation"
            >
                Steps direction
            </tr>
            <tr
                name="[(activeItemIndex)]"
                tuiDocAPIItem
                type="number"
                [(value)]="activeItemIndex"
            >
                Active step index
            </tr>
        </table>

        <h3>Step</h3>
        <table tuiDocAPI>
            <tr
                name="[stepState]"
                tuiDocAPIItem
                type="'normal' | 'pass' | 'error'"
                [items]="stateVariants"
                [(value)]="state"
            >
                Step state
            </tr>
            <tr
                name="[icon]"
                tuiDocAPIItem
                type="string"
                [items]="iconVariants"
                [(value)]="icon"
            >
                Step custom icon
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
