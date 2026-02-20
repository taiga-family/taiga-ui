import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="HintPointer"
    package="CORE"
    path="core/portals/hint"
    type="directives"
>
    <ng-template pageTab>
        <p>A directive to show a hint above the cursor</p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <div
                tuiHint="Some information"
                tuiHintPointer
                [tuiHintAppearance]="hint.appearance"
                [tuiHintDirection]="hint.direction"
                [tuiHintHideDelay]="hideDelay"
                [tuiHintShowDelay]="showDelay"
            >
                It is followed inside the block
            </div>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiHint]"
                tuiDocAPIItem
                type="PolymorpheusContent"
            >
                Hint content
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
