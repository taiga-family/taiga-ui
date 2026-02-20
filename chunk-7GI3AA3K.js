import"./chunk-HU6DUUP4.js";var n=`Links by default have
<button
    iconStart="@tui.edit"
    tuiLink
    type="button"
>
    <span>action</span>
</button>
appearance which you can override with
<button
    appearance="action-grayscale"
    tuiLink
    type="button"
>
    action-grayscale
</button>
or
<button
    appearance="action-destructive"
    iconEnd="@tui.trash"
    tuiLink
    type="button"
    [textContent]="'action-destructive'"
></button>
<p>
    If you use no appearance, links would
    <button
        appearance=""
        iconEnd="@tui.external-link"
        tuiLink
        type="button"
    >
        <span>inherit text color</span>
    </button>
    in tandem with an underline decoration to make them visible.
</p>
<p tuiTheme="dark">
    It would also work well together with
    <a
        appearance=""
        iconStart="@tui.paintbrush"
        tuiLink
    >
        <span>dark theme</span>
    </a>
    and other text colors
</p>

If you want, you can
<button
    iconStart="@tui.heart"
    tuiLink
    type="button"
    [style.text-decoration-line]="'underline'"
>
    <span>enable</span>
</button>
dashed underline for any appearance using
<code>text-decoration-line: underline</code>
or switch
<button
    appearance=""
    tuiLink
    type="button"
    [style.text-decoration-style]="'dashed'"
>
    inherited
</button>
link underline to dashed style by
<code>text-decoration-style: dashed</code>
`;export{n as default};
