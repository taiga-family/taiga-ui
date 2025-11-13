import"./chunk-42JZD6NG.js";var a=`<tui-badge
    appearance="accent"
    size="l"
    class="badge tui-space_left-2"
    [tuiHint]="badgeHint"
>
    Hover me

    <ng-template #badgeHint>
        <a
            tuiHintAppearance="dark"
            [tuiHint]="linkHint"
        >
            Hover me again

            <ng-template #linkHint>Nested hint</ng-template>
        </a>
    </ng-template>
</tui-badge>
`;export{a as default};
