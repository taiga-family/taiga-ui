import"./chunk-HU6DUUP4.js";var i=`<tui-textfield
    tuiDropdownLimitWidth="auto"
    tuiDropdownSelectionPosition="word"
    [tuiDropdownSelection]="predicate"
>
    <label tuiLabel>Type a message</label>
    <textarea
        tuiTextarea
        [focused]="(driver() | async) || null"
        [max]="4"
        [min]="4"
        [(ngModel)]="value"
        (keydown.stop.arrowDown)="onArrow($event, 0)"
        (keydown.stop.arrowUp)="onArrow($event, options().length - 1)"
    ></textarea>

    <tui-data-list
        *tuiDropdown
        size="m"
    >
        @for (item of items | tuiMapper: filter : search.replace('@', ''); track item) {
            <button
                tuiOption
                type="button"
                (click)="onClick(item.login)"
            >
                <div
                    size="s"
                    tuiAvatar
                >
                    {{ item.name | tuiInitials }}
                    <img
                        alt=""
                        [src]="item.avatar"
                    />
                </div>
                {{ item.name }}
            </button>
        }
    </tui-data-list>
</tui-textfield>
`;export{i as default};
