import"./chunk-HU6DUUP4.js";var n=`<button
    type="button"
    [tuiPin]="a"
    (click)="a = !a"
>
    <img
        alt="avatar"
        src="assets/images/avatar.jpg"
    />
    <span tuiTitle>Title</span>
</button>

<button
    type="button"
    [tuiPin]="b"
    (click)="b = !b"
>
    <tui-icon icon="@tui.dollar-sign" />
    <span tuiTitle>
        Title
        <span tuiSubtitle>Subtitle</span>
    </span>
</button>

<button
    type="button"
    class="link"
    [tuiPin]="c"
    (click)="c = !c"
>
    <span tuiPin>
        <tui-icon icon="@tui.dollar-sign" />
    </span>
    <span
        tuiFade
        tuiTitle
    >
        Very very long title that gets cut
    </span>
    <tui-icon
        iconStart="@tui.heart"
        tuiBadge
    />
</button>

<button
    type="button"
    class="link"
    [tuiPin]="d"
    (click)="d = !d"
>
    <span tuiPin>4.5</span>
    <span tuiTitle>
        Title
        <span
            tuiFade
            tuiSubtitle
        >
            <tui-icon icon="@tui.heart" />
            Subtitle with an icon
        </span>
    </span>
</button>
`;export{n as default};
