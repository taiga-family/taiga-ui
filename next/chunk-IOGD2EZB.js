import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page
    header="Chip"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>Chip component is used to display array data and can also be interactive depending on the tag used.</p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="$index === 5 ? fadeDescription : null"
                [heading]="example"
            />
        }

        <ng-template #fadeDescription>
            <p>
                If there are two labels with
                <code>tuiFade</code>
                inside the chip, the right label takes precedence by default. This means that the left label goes into
                fade. But if the width of the left label is less than 30% of the whole chip, then the right part of the
                chip will be faded in
            </p>
        </ng-template>
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <span
                tuiChip
                [appearance]="appearance.appearance"
                [iconEnd]="icons.iconEnd"
                [iconStart]="icons.iconStart"
                [size]="size"
            >
                Chip
            </span>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tr
                name="[size]"
                tuiDocAPIItem
                type="TuiSizeXS | TuiSizeL"
                [items]="sizes"
                [(value)]="size"
            >
                Size of the chip
            </tr>
            <tbody
                #appearance
                tuiDocAppearance
                [hiddenOptions]="['state', 'focus', 'mode']"
            ></tbody>
            <tbody
                #icons
                tuiDocIcons
            ></tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{a as default};
