import"./chunk-HU6DUUP4.js";var e=`<div
    appearance="floating"
    tuiCardLarge
>
    <header tuiHeader>
        <h1 tuiTitle>
            Title
            <span tuiSubtitle>Subtitle</span>
        </h1>
    </header>

    @for (_ of '-'.repeat(3); track $index) {
        <button
            tuiCell="l"
            tuiDropdownAlign="end"
            tuiDropdownAuto
            type="button"
            [tuiDropdown]="dropdown"
            [tuiDropdownSided]="true"
        >
            <div
                appearance="primary"
                tuiAvatar="@tui.star"
            ></div>

            <div tuiTitle>
                Title
                <div tuiSubtitle>Description</div>
            </div>

            <tui-icon
                icon="@tui.chevron-right"
                tuiAppearance="icon"
            />
        </button>
    }

    <button
        tuiLink
        type="button"
    >
        Show all
    </button>
</div>

<ng-template
    #dropdown
    let-close
>
    <tui-data-list>
        <tui-opt-group>
            @for (item of ['Edit', 'Download', 'Rename', 'Delete']; track item) {
                <button tuiOption>{{ item }}</button>
            }
        </tui-opt-group>
        <hr />
        <tui-opt-group>
            <button
                tuiOption
                (click)="close()"
            >
                Nevermind
            </button>
        </tui-opt-group>
    </tui-data-list>
</ng-template>
`;export{e as default};
