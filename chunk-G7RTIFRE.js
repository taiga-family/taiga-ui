import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Appearance"
    package="CORE"
    type="directives"
>
    <ng-template pageTab>
        <p>A directive for visual presets of interactive components</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="descriptions[$index]"
                [fullsize]="$last"
                [heading]="example"
            />
        }
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <button
                tuiButton
                type="button"
                [appearance]="appearance"
                [tuiAppearanceFocus]="focus"
                [tuiAppearanceState]="state"
            >
                Appearance
            </button>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiAppearance]"
                tuiDocAPIItem
                type="string"
                [items]="appearances"
                [(value)]="appearance"
            >
                Appearance (use
                <code>appearance</code>
                selector instead of
                <code>tuiAppearance</code>
                when host component already exposes it via hostDirectives)
            </tr>
            <tr
                name="[tuiAppearanceFocus]"
                tuiDocAPIItem
                type="boolean | null"
                [items]="[true, false]"
                [(value)]="focus"
            >
                Manual override of focused state
            </tr>
            <tr
                name="[tuiAppearanceState]"
                tuiDocAPIItem
                type="TuiInteractiveState | null"
                [items]="states"
                [(value)]="state"
            >
                Manual override of interactive state
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
