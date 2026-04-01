import"./chunk-HU6DUUP4.js";var e=`<div tuiCell>
    <div tuiTitle>
        Single action
        <div tuiSubtitle>Description of the action</div>
    </div>
    <button
        tuiButton
        type="button"
    >
        Action
    </button>
</div>

<div tuiCell>
    <div tuiTitle>
        Multiple actions
        <div tuiSubtitle>With no content on the right</div>
    </div>

    <button
        appearance="icon"
        iconStart="@tui.ellipsis"
        tuiDropdownAlign="end"
        tuiDropdownAuto
        tuiIconButton
        type="button"
        [tuiDropdown]="dropdown"
    >
        Action
    </button>
    <ng-template
        #dropdown
        let-close
    >
        <tui-data-list-wrapper
            [items]="items"
            (itemClick)="close()"
        />
    </ng-template>
</div>

<button
    tuiCell
    type="button"
>
    <div tuiTitle>
        Multiple actions
        <div tuiSubtitle>When there's content on the right</div>
    </div>
    <div
        tuiCellActions
        tuiGroup
        tuiTheme="dark"
        [collapsed]="true"
    >
        @for (item of items; track item) {
            <button
                appearance="primary-grayscale"
                tuiIconButton
                type="button"
                [iconStart]="item.icon"
            >
                {{ item }}
            </button>
        }
    </div>
    <div tuiTitle>
        Hover over
        <div tuiSubtitle>Put it before the right side</div>
    </div>
</button>
`;export{e as default};
