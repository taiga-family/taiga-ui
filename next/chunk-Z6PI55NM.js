import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="Block"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>
            <code>Block</code>
            is a special presentation of a checkbox/radiobutton which can display actual control or be a control itself
        </p>

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
            <label
                [appearance]="appearance.appearance"
                [iconEnd]="icons.iconEnd"
                [iconStart]="icons.iconStart"
                [tuiAppearanceFocus]="appearance.focus"
                [tuiAppearanceMode]="appearance.mode"
                [tuiAppearanceState]="appearance.state"
                [tuiBlock]="size"
            >
                <span tuiTitle>
                    tuiTitle
                    <span tuiSubtitle>tuiSubtitle</span>
                </span>
                <input
                    tuiSwitch
                    type="checkbox"
                    [(ngModel)]="value"
                />
            </label>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[tuiBlock]"
                tuiDocAPIItem
                type="TuiSizeL | TuiSizeS"
                [items]="sizes"
                [(value)]="size"
            >
                Size of the block
            </tr>
            <tbody
                #appearance
                [tuiDocAppearance]="appearances"
            ></tbody>
            <tbody
                #icons
                tuiDocIcons
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{t as default};
