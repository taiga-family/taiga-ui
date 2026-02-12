import"./chunk-B4AJQJMI.js";var e=`@for (font of fonts | keyvalue: orderBy; track font) {
    <p>
        <tui-copy
            [size]="$index > 5 ? 'm' : 'l'"
            [style.font]="\`var(\${font.value})\`"
            [style.white-space]="'nowrap'"
        >
            {{ font.key }}
        </tui-copy>
    </p>
}
`;export{e as default};
