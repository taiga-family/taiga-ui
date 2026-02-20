import"./chunk-HU6DUUP4.js";var e=`<div tuiCell>
    <div
        tuiAccessories
        tuiAvatar="@tui.eye"
    ></div>
    <div tuiTitle>
        Long title in a cell will wrap to multiple lines and so will the subtitle
        <div
            tuiSubtitle
            [style.display]="'block'"
        >
            Use
            <strong>tuiAccessories</strong>
            to keep your side content properly aligned if you have many lines of text
        </div>
    </div>
    <div tuiAccessories>
        <tui-icon
            icon="@tui.check"
            [style.color]="'var(--tui-text-positive)'"
        />
    </div>
</div>

<div
    tuiCell
    [style.white-space]="'nowrap'"
>
    <div
        tuiFade
        tuiTitle
    >
        Alternatively you can use fade to hide extra text using nowrap CSS
        <div tuiSubtitle>Works the same for subtitle when fade directive is applied to the top</div>
    </div>
    <div tuiBadge>Works with the right side</div>
</div>

<div
    tuiCell
    [style.white-space]="'nowrap'"
>
    <div
        tuiAvatar="@tui.smile"
        [round]="false"
    ></div>
    <div
        tuiFade
        tuiTitle
    >
        Works with fade on both sides
        <div tuiSubtitle>You can control proportions</div>
    </div>
    <div
        tuiFade
        tuiTitle
    >
        Proportions are controlled with flex
        <div tuiSubtitle>Flex shrink is set to 70-30 by default</div>
    </div>
    <tui-badge-notification size="xs" />
</div>

<div tuiCell>
    <div
        tuiAccessories
        tuiAvatar="@tui.user"
    >
        <img
            alt=""
            src="assets/images/avatar.jpg"
        />
    </div>
    <div
        tuiAccessories
        tuiTitle
    >
        Alexander
        <div tuiSubtitle>Taiga UI developer</div>
    </div>
    <div tuiTitle>
        <span [style.color]="'var(--tui-text-positive)'">+$1000</span>
        <div tuiSubtitle>Bonus for tuiCell component</div>
        <div
            appearance="primary"
            tuiBadge
        >
            Awesome!
        </div>
    </div>
</div>

<div tuiCell>
    <div
        tuiAccessories
        tuiAvatar="@tui.home"
    ></div>
    <div tuiTitle>
        <strong>Main account</strong>
        <div tuiSubtitle>USD</div>
        <div
            appearance="neutral"
            tuiBadge
        >
            By default unless arrested
        </div>
    </div>
    <div
        tuiAccessories
        tuiTitle
        [style.overflow]="'visible'"
        [style.white-space]="'nowrap'"
        [style.width]="0"
    >
        $123 456
        <div tuiSubtitle>Careful, content may overlap</div>
    </div>
</div>
`;export{e as default};
