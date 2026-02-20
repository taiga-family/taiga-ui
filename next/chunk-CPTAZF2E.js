import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Hint"
    package="CORE"
    path="core/portals/hint"
    type="directives"
>
    <ng-template pageTab>
        <p>Directive to show a hint by hover of an element</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [fullsize]="$first"
                [heading]="example"
            >
                @if ($index === 1) {
                    <div
                        tuiNotification
                        class="tui-space_bottom-4"
                    >
                        Make sure
                        <code>*tuiHint</code>
                        directive is nested inside
                        <code>tuiHint</code>
                        directive so that dependency injection works properly
                    </div>
                }
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <ng-template #template>
                To be accessible, hint should be set to a focusable element. See
                <a
                    tuiLink
                    [routerLink]="routes.HintDescribe"
                >
                    <code>HintDescribe</code>
                </a>
            </ng-template>
            <span
                [tuiHint]="template"
                [tuiHintAppearance]="hint.appearance"
                [tuiHintDescribe]="'qwerty'"
                [tuiHintDirection]="hint.direction"
                [tuiHintHideDelay]="hideDelay"
                [tuiHintShowDelay]="showDelay"
            >
                Hover it!
            </span>
            <input id="qwerty" />
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiHint]"
                tuiDocAPIItem
                type="PolymorpheusContent"
            >
                Content
            </tr>
            <tr
                name="[tuiHintShowDelay]"
                tuiDocAPIItem
                type="number"
                [(value)]="showDelay"
            >
                Show delay (ms)
            </tr>
            <tr
                name="[tuiHintHideDelay]"
                tuiDocAPIItem
                type="number"
                [(value)]="hideDelay"
            >
                Hide delay (ms)
            </tr>
            <tbody
                #hint
                tuiDocHint
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
