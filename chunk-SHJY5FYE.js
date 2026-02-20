import"./chunk-HU6DUUP4.js";var a=`<span
    appearance="accent"
    size="l"
    tuiBadge
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
</span>
`;export{a as default};
