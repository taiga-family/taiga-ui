import"./chunk-42JZD6NG.js";var i=`<button
    appearance="flat"
    tuiButton
    tuiChevron
    type="button"
    [tuiDropdown]="content"
    [tuiDropdownLimitWidth]="isMobile ? 'fixed' : 'min'"
    [tuiDropdownMaxHeight]="700"
    [(tuiDropdownOpen)]="open"
>
    Why Taiga UI?
</button>

<ng-template #content>
    <tui-data-list>
        @for (group of groups; track group) {
            <tui-opt-group [label]="group.label">
                @for (item of group.items; track item) {
                    <button
                        tuiOption
                        type="button"
                        class="option"
                        (click)="open = false"
                    >
                        {{ item }}
                    </button>
                }
            </tui-opt-group>
        }
    </tui-data-list>
</ng-template>

<tui-input
    [formControl]="control"
    [tuiDropdownOpen]="((control.valueChanges | async)?.length ?? 0) > 2"
>
    Enter 3 characters

    <tui-data-list *tuiDataList />
</tui-input>
`;export{i as default};
