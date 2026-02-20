import"./chunk-HU6DUUP4.js";var o=`<button
    tuiButton
    type="button"
    (click)="toggle(true)"
>
    Show/Hide
</button>

<ng-template
    [tuiSheetDialog]="open"
    [tuiSheetDialogOptions]="{stops: ['29rem'], offset: offset, appearance: 'fullscreen'}"
    (tuiSheetDialogChange)="toggle($event)"
>
    <header class="header">
        <tui-textfield iconStart="@tui.search">
            <input
                tuiInput
                [formControl]="search"
            />
            <label tuiLabel>Find user</label>
        </tui-textfield>
    </header>
    <div class="container">
        @for (user of users$ | async; track user) {
            <button
                type="button"
                class="item"
                (click)="toggle(false)"
            >
                <div
                    size="s"
                    [style.background]="user | tuiAutoColor"
                    [tuiAvatar]="user | tuiInitials"
                ></div>
                {{ user }}
            </button>
        }
    </div>
    <footer tuiFloatingContainer>
        <button
            tuiButton
            type="button"
            (click)="toggle(false)"
        >
            Invite more users
        </button>
        <span class="legal">Opens a separate app</span>
    </footer>
</ng-template>
`;export{o as default};
