import"./chunk-HU6DUUP4.js";var o=`<button
    tuiButton
    tuiChevron
    type="button"
    [attr.aria-expanded]="open()"
    [tuiDropdown]="dropdownContent"
    [tuiDropdownManual]="open()"
    [tuiObscuredEnabled]="open()"
    (click)="onClick()"
    (tuiActiveZoneChange)="onActiveZone($event)"
    (tuiObscured)="onObscured($event)"
>
    {{ buttonLabel() }}
    <ng-template #dropdownContent>
        <tui-data-list>
            @for (action of actions; track action.title) {
                <button
                    tuiOption
                    type="button"
                    (click)="onSelect(action)"
                >
                    <span tuiTitle>
                        {{ action.title }}
                        <span tuiSubtitle>{{ action.description }}</span>
                    </span>
                </button>
            }
        </tui-data-list>
    </ng-template>
</button>
`;export{o as default};
