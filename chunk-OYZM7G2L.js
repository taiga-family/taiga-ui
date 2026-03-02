import"./chunk-HU6DUUP4.js";var a=`<div tuiNotification>
    When mobile styles are enabled you can use
    <code style="white-space: nowrap">input[type='search'][tuiSearch]</code>
    to imitate iOS native input
</div>
<p>
    <button
        tuiButton
        type="button"
        (click)="open.set(true)"
    >
        Show
    </button>
</p>
<ng-template
    [tuiSheetDialogOptions]="{appearance: 'fullscreen', bar: false}"
    [(tuiSheetDialog)]="open"
>
    <header>
        <tui-app-bar>
            <button
                tuiButton
                tuiSlot="start"
                type="button"
                (click)="open.set(false)"
            >
                Close
            </button>
            Search contacts
        </tui-app-bar>
        <input
            placeholder="Search contacts"
            tuiSearch
            type="search"
            class="input"
            [(ngModel)]="search"
        />
    </header>
    <div class="favorites">
        @for (item of items | slice: 0 : 6; track item) {
            <tui-avatar-labeled [label]="item.name">
                <div tuiAvatar="@tui.user">
                    <img
                        alt=""
                        [src]="item.avatar"
                    />
                </div>
            </tui-avatar-labeled>
        }
    </div>
    <div class="items">
        @for (item of items | tuiFilter: filter : search; track item) {
            <button
                tuiCell
                type="button"
                class="cell"
                (click)="open.set(false)"
            >
                <div tuiAvatar="@tui.user">
                    <img
                        alt=""
                        [src]="item.avatar"
                    />
                </div>
                <span tuiTitle>
                    <span tuiFade>{{ item.name }}</span>
                    <span tuiSubtitle>{{ item.email }}</span>
                </span>
            </button>
        }
    </div>
    <footer tuiFloatingContainer>
        <button
            tuiButton
            type="button"
            class="button"
            (click)="open.set(false)"
        >
            Add contact
        </button>
    </footer>
</ng-template>
`;export{a as default};
