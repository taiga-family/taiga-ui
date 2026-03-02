import"./chunk-HU6DUUP4.js";var s=`<div class="container">
    <tui-block-status
        class="card"
        [card]="true"
    >
        <tui-avatar-stack tuiSlot="top">
            @for (user of users; track user) {
                <div
                    size="l"
                    [style.background]="user | tuiAutoColor"
                    [tuiAvatar]="user | tuiInitials"
                ></div>
            }
        </tui-avatar-stack>

        You can put other content instead of image using
        <code>tui-block-content</code>
        css class

        <button
            appearance="primary"
            size="s"
            tuiButton
            type="button"
            [style.border-radius.rem]="100"
        >
            Got it
        </button>
    </tui-block-status>

    <tui-block-status
        [card]="true"
        [class.card]="true"
    >
        <img
            alt="Alex Inkin"
            src="assets/images/avatar.jpg"
            tuiSlot="top"
            class="avatar"
        />

        <h1>Alex Inkin</h1>
    </tui-block-status>
</div>
`;export{s as default};
