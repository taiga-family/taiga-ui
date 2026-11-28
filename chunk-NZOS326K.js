import"./chunk-LQ6M4NCU.js";var t=`<span
    appearance="accent"
    size="l"
    tuiBadge
    class="badge"
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
`;export{t as default};
