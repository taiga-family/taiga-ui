import"./chunk-42JZD6NG.js";var i=`<tui-textfield
    tuiDropdownLimitWidth="auto"
    tuiDropdownSelectionPosition="word"
    [tuiDropdownSelection]="predicate"
>
    <label tuiLabel>Type a message</label>
    <textarea
        tuiTextarea
        [focused]="(driver | async) || null"
        [max]="4"
        [min]="4"
        [(ngModel)]="value"
        (keydown.stop.arrowDown)="onArrow($event, 'first')"
        (keydown.stop.arrowUp)="onArrow($event, 'last')"
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
