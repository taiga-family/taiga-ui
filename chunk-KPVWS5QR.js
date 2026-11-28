import"./chunk-LQ6M4NCU.js";var i=`<tui-doc-page
    header="Hint"
    package="CORE"
    path="core/portals/hint"
    type="directives"
>
    <ng-template pageTab>
        <p>Directive to show a hint over an element, by pointer hover as default trigger</p>
        <p>
            Use
            <code>TUI_HINT_OFFSET</code>
            token to configure bubble and pointing arrow offsets
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [fullsize]="$first"
                [heading]="example"
            />
            <ng-template #description>
                @switch ($index) {
                    @case (1) {
                        Make sure
                        <code>*tuiHint</code>
                        directive is nested inside
                        <code>tuiHint</code>
                        directive so that dependency injection works properly
                    }
                    @case (5) {
                        On mobile, a tap activates the button or link immediately. Press and hold to show its hint
                        without obscuring the primary tap action.
                    }
                }
            </ng-template>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <ng-template #template>
                To be accessible, hint should be set to a focusable element. See
                <a
                    appearance=""
                    tuiLink
                    [routerLink]="routes.HintDescribe"
                >
                    HintDescribe
                </a>
            </ng-template>
            <span
                tuiBadge
                tuiHintDescribe="qwerty"
                [tuiHint]="template"
                [tuiHintAppearance]="hint.appearance"
                [tuiHintCentered]="hint.centered"
                [tuiHintDirection]="hint.direction"
                [tuiHintHideDelay]="hideDelay"
                [tuiHintShowDelay]="showDelay"
            >
                Hover me
            </span>
            <input
                id="qwerty"
                placeholder="Focus me with keyboard"
            />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiHint]"
                tuiDocAPIItem
                type="PolymorpheusContent"
            >
                content of the hint
            </tr>
            <tr
                name="[tuiHintContext]"
                tuiDocAPIItem
                type="C"
            >
                context for the hint content
            </tr>
            <tr
                name="[tuiHintShowDelay]"
                tuiDocAPIItem
                type="number"
                [(value)]="showDelay"
            >
                show delay in milliseconds
            </tr>
            <tr
                name="[tuiHintHideDelay]"
                tuiDocAPIItem
                type="number"
                [(value)]="hideDelay"
            >
                hide delay in milliseconds
            </tr>
            <tbody
                #hint
                tuiDocHint
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
