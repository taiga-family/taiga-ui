import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="HintDescribe"
    package="CORE"
    path="core/portals/hint"
    type="directives"
>
    <ng-template pageTab>
        <p>Directive to show a hint in accessible way upon keyboard focus</p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <input
                placeholder="My id is 'qwerty'"
                tuiHint="I will be visible upon keyboard focus"
                tuiHintDescribe="qwerty"
                [tuiHintAppearance]="hint.appearance"
                [tuiHintDirection]="hint.direction"
            />
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
                name="[tuiHintDescribe]"
                tuiDocAPIItem
                type="string"
                [(value)]="id"
            >
                Id of the element
            </tr>
            <tbody
                #hint
                tuiDocHint
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
