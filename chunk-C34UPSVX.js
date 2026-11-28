import"./chunk-LQ6M4NCU.js";var e=`<p>
    Tooltip is a hint on a question mark icon. If you need something else as a host, use
    <a
        tuiLink
        [routerLink]="['/tui-hint']"
    >
        <code>Hint</code>
    </a>
    directive directly.
</p>
<div
    size="l"
    tabindex="0"
    tuiAvatar
    tuiHintAppearance="floating"
    tuiHintDirection="end"
    tuiTheme="light"
    [style.background]="'\u2764\uFE0F' | tuiAutoColor"
    [tuiHint]="tooltip"
>
    \u2764\uFE0F
</div>
<ng-template #tooltip>
    <div>
        What is
        <strong>love</strong>
        ?
    </div>
    <div>Baby don't hurt me</div>
    <div>Don't hurt me</div>
    <div>No more...</div>
</ng-template>
`;export{e as default};
