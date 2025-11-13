import"./chunk-42JZD6NG.js";var a=`<tui-doc-page
    header="Fade"
    package="KIT"
    type="directives"
>
    <ng-template pageTab>
        <p>Directive that uses masking to fade out overflown content</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
                [id]="example | tuiKebab"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <div
                tuiFade
                class="fade"
                [tuiFadeHeight]="lineHeight"
                [tuiFadeOffset]="offset"
                [tuiFadeSize]="size"
            >
                I am a very long text with
                <code>white-space: nowrap</code>
                that fades
            </div>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiFade]"
                tuiDocAPIItem
                type="TuiOrientation"
            >
                Orientation of the fade
            </tr>
            <tr
                name="[tuiFadeHeight]"
                tuiDocAPIItem
                type="string"
                [(value)]="lineHeight"
            >
                Line height (required for multiline text fade)
            </tr>
            <tr
                name="[tuiFadeOffset]"
                tuiDocAPIItem
                type="string"
                [(value)]="offset"
            >
                Offset from the edge for the fade to start
            </tr>
            <tr
                name="[tuiFadeSize]"
                tuiDocAPIItem
                type="string"
                [(value)]="size"
            >
                Size of the fade
            </tr>
        </table>
    </ng-template>

    <tui-setup *pageTab />
</tui-doc-page>
`;export{a as default};
