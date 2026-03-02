import"./chunk-HU6DUUP4.js";var n=`<div class="island">
    <tui-line-clamp
        [content]="daenerys"
        [lineHeight]="20"
        [linesLimit]="2"
    />
</div>

<div
    tuiNotification
    class="tui-space_bottom-4"
>
    Use
    <code>white-space: nowrap</code>
    to expand to the right
</div>

<div class="island">
    <tui-line-clamp
        [content]="mormont"
        [lineHeight]="20"
        [linesLimit]="1"
    />
</div>
<ng-template #daenerys>
    <div class="hint">
        Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the
        First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven
        Kingdoms, Breaker of Chains and Mother of Dragons
    </div>
</ng-template>
<ng-template #mormont>
    <div class="hint no-wrap">Jorah Mormont of House Mormont, Lord of Bear Island</div>
</ng-template>

<div class="island">
    <tui-line-clamp [content]="content" />

    <ng-template #content>
        <span
            appearance="negative"
            size="xxs"
            tuiChip
        >
            DRAFT
        </span>

        Davis, Julia
    </ng-template>
</div>

@if (value$ | async; as value) {
    <div class="wrapper">
        <div class="result">
            <div class="content">
                <tui-line-clamp
                    [content]="value"
                    [lineHeight]="20"
                    [linesLimit]="1"
                />
            </div>
        </div>
    </div>
} @else {
    Loading...
}
`;export{n as default};
