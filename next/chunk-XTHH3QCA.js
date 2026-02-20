import"./chunk-HU6DUUP4.js";var a=`<div
    appearance="floating"
    tuiCardMedium
>
    <tui-avatar-stack direction="start">
        @for (url of urls; track url) {
            <div
                size="s"
                tuiAvatar="@tui.user"
                [style.background]="url | tuiAutoColor"
            >
                <img
                    alt=""
                    [src]="url"
                />
            </div>
        }
    </tui-avatar-stack>

    <h2 tuiTitle>
        Title
        <span tuiSubtitle>Subtitle</span>
    </h2>
</div>

<div
    appearance="floating"
    tuiCardMedium
>
    <h2 tuiTitle>
        Title
        <span tuiSubtitle>Subtitle</span>
    </h2>

    <tui-avatar-stack direction="start">
        @for (url of urls; track url) {
            <div
                size="s"
                tuiAvatar="@tui.user"
                [style.background]="url | tuiAutoColor"
            >
                <img
                    alt=""
                    [src]="url"
                />
            </div>
        }
    </tui-avatar-stack>
</div>
`;export{a as default};
