import"./chunk-HU6DUUP4.js";var a=`<div tuiBlockDetails>
    <div
        tuiAvatar="@tui.gift"
        [size]="isMobile ? 'xl' : 'xxl'"
    ></div>
    <h2 tuiTitle>
        Auchan
        <div tuiSubtitle>grocery &#x2022; MMC 5350</div>
    </h2>

    <span [style.color]="'var(--tui-text-positive)'">{{ 0.5 | tuiAmount: 'USD' }}</span>
    <span
        tuiFade
        tuiSubtitle
    >
        promotion (long value with fade)
    </span>

    <div
        appearance="neutral"
        tuiBadge
    >
        cashback
    </div>
</div>

<div tuiBlockDetails>
    <div
        tuiAvatar="@tui.star"
        [size]="isMobile ? 'xl' : 'xxl'"
    ></div>
    <h2 tuiTitle>
        Uber
        <div tuiSubtitle>taxi &#x2022; MMC 5550</div>
    </h2>

    <span [style.color]="'var(--tui-text-negative)'">{{ -10.5 | tuiAmount: 'USD' }}</span>
</div>
`;export{a as default};
