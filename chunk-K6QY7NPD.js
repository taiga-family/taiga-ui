import"./chunk-HU6DUUP4.js";var n=`<tui-doc-page
    header="HintManual"
    package="CORE"
    path="core/portals/hint"
    type="directives"
>
    <ng-template pageTab>
        <p>Directive to show a hint manually</p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <button
                tuiButton
                tuiHint="It says 'Hi all!' into console"
                type="button"
                [tuiHintAppearance]="hint.appearance"
                [tuiHintDirection]="hint.direction"
                [tuiHintManual]="show"
                (click)="sayHi()"
            >
                A strange button
            </button>
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
                name="[tuiHintManual]"
                tuiDocAPIItem
                type="boolean"
                [(value)]="show"
            >
                Show/hide hint
            </tr>
            <tbody
                #hint
                tuiDocHint
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{n as default};
