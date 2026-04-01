import"./chunk-HU6DUUP4.js";var e=`<h3 tuiTitle>
    <strong>Truncate</strong>
    <span tuiSubtitle>
        Using
        <code>.text-truncate()</code>
        mixin
    </span>
</h3>
<tui-breadcrumbs>
    @for (item of items; track item) {
        <button
            *tuiItem
            tuiHintOverflow
            tuiLink
            type="button"
            class="link"
            [class.link_last]="$last"
        >
            {{ item }}
        </button>
    }
</tui-breadcrumbs>
<hr />
<h3 tuiTitle>
    <strong>Fade</strong>
    <span tuiSubtitle>
        Combining
        <code>.text-truncate()</code>
        mixin with
        <code>
            <a
                tuiLink
                [routerLink]="fade"
            >
                Fade
            </a>
        </code>
        directive
    </span>
</h3>
<tui-breadcrumbs>
    @for (item of items; track item) {
        <button
            *tuiItem
            tuiFade
            tuiHintOverflow
            tuiLink
            type="button"
            class="link"
            [class.link_last]="$last"
        >
            {{ item }}
        </button>
    }
</tui-breadcrumbs>
<hr />
<h3 tuiTitle>
    <strong>Scroll</strong>
    <span tuiSubtitle>
        Putting
        <code>
            <a
                tuiLink
                [routerLink]="fade"
            >
                Fade
            </a>
        </code>
        directive on entire component
    </span>
</h3>
<tui-breadcrumbs tuiFade>
    @for (item of items; track item) {
        <button
            *tuiItem
            tuiLink
            type="button"
            [class.link_last]="$last"
        >
            {{ item }}
        </button>
    }
</tui-breadcrumbs>
<hr />
<h3 tuiTitle>
    <strong>Collapse</strong>
    <span tuiSubtitle>
        Using
        <code>itemsLimit: number</code>
    </span>
</h3>
<tui-breadcrumbs [itemsLimit]="10">
    @for (item of items; track item) {
        <button
            *tuiItem
            tuiLink
            type="button"
            [class.link_last]="$last"
        >
            {{ item }}
        </button>
    }
</tui-breadcrumbs>
`;export{e as default};
