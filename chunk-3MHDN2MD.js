import"./chunk-B4AJQJMI.js";var f=`@for (font of fonts; track font) {
    <p>
        <tui-copy
            [size]="$index > 5 ? 'm' : 'l'"
            [style.font]="\`var(--tui-\${font})\`"
            [style.white-space]="'nowrap'"
        >
            {{ font }}
        </tui-copy>
    </p>
}
`;export{f as default};
