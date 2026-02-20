import"./chunk-HU6DUUP4.js";var n=`<strong>Buttons</strong>
<tui-segmented>
    <button type="button">Buttons</button>
    <button type="button">Can be</button>
    <button type="button">Used</button>
</tui-segmented>
<hr />
<strong>Links</strong>
<tui-segmented>
    <a
        routerLinkActive
        [routerLink]="routes.Link"
    >
        Use routerLink
    </a>
    <a
        routerLinkActive
        [routerLink]="routes.Segmented"
        [routerLinkActiveOptions]="options"
    >
        And routerLinkActive
    </a>
    <a
        fragment="content"
        routerLinkActive
        [routerLink]="routes.Segmented"
        [routerLinkActiveOptions]="options"
    >
        To work with links
    </a>
</tui-segmented>
<hr />
<strong>Icons</strong>
<tui-segmented>
    <button
        title="light"
        type="button"
    >
        <tui-icon icon="@tui.sun" />
    </button>
    <button
        title="dark"
        type="button"
    >
        <tui-icon icon="@tui.moon" />
    </button>
</tui-segmented>
<hr />
<strong>Control</strong>
<tui-segmented>
    <label>
        <input
            name="radio"
            type="radio"
            value="a"
            [(ngModel)]="selected"
        />
        Use radio inside
    </label>
    <label>
        <input
            name="radio"
            type="radio"
            value="b"
            [(ngModel)]="selected"
        />
        It would be hidden
    </label>
    <label>
        <input
            name="radio"
            type="radio"
            value="c"
            [(ngModel)]="selected"
        />
        Automatically
    </label>
</tui-segmented>
<button
    appearance="floating"
    size="s"
    tuiButton
    type="button"
    (click)="selected = 'b'"
>
    Select second option
</button>
`;export{n as default};
