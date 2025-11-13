import"./chunk-42JZD6NG.js";var i=`<tui-doc-page
    header="HintPointer"
    package="CORE"
    path="core/directives/hint"
    type="directives"
>
    <ng-template pageTab>
        <p>A directive to show a hint above the cursor</p>

        <tui-doc-example
            id="base"
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
                [tuiHintAppearance]="appearance"
                [tuiHintDirection]="direction"
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
        </table>
        <inherited-documentation />
    </ng-template>

    <tui-setup *pageTab />
</tui-doc-page>
`;export{i as default};
