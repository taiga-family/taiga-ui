import"./chunk-B4AJQJMI.js";var e=`<tui-badge>Default</tui-badge>
<tui-badge appearance="primary">Primary</tui-badge>
<tui-badge appearance="accent">Accent</tui-badge>
<tui-badge
    appearance="positive"
    tuiStatus
>
    Success
</tui-badge>
<tui-badge
    appearance="negative"
    tuiStatus
>
    Error
</tui-badge>
<tui-badge
    appearance="warning"
    tuiStatus
>
    Warning
</tui-badge>
<tui-badge appearance="warning">Warning</tui-badge>
<tui-badge appearance="neutral">Neutral</tui-badge>
<tui-badge appearance="info">Info</tui-badge>

<p>Custom status</p>
<tui-badge
    tuiStatus="var(--tui-chart-categorical-09)"
    [style.background]="'var(--tui-chart-categorical-01)'"
>
    Custom
</tui-badge>

<p>Use CSS for support colors</p>
@for (_ of '-'.repeat(20); track $index) {
    <tui-badge [style.background]="\`var(--tui-chart-categorical-\${$index.toString().padStart(2, '0')})\`">
        Taiga
    </tui-badge>
}

<p>Sizes</p>
<tui-badge
    appearance="positive"
    size="xl"
    tuiStatus
>
    Success
</tui-badge>
<tui-badge
    appearance="positive"
    size="l"
    tuiStatus
>
    Success
</tui-badge>
<tui-badge
    appearance="positive"
    size="m"
    tuiStatus
>
    Success
</tui-badge>
<tui-badge
    appearance="positive"
    size="s"
    tuiStatus
>
    Success
</tui-badge>
`;export{e as default};
