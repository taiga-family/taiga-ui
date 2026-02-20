import"./chunk-HU6DUUP4.js";var i=`<button
    tuiChevron
    tuiDropdownAlign="end"
    tuiLink
    type="button"
    class="link"
    [iconStart]="ascending ? '@tui.chevron-up' : '@tui.chevron-down'"
    [textContent]="primary"
    [tuiDropdown]="dropdown"
    [(tuiDropdownOpen)]="open"
></button>

<ng-template #dropdown>
    <tui-data-list>
        @for (group of items; track group) {
            <tui-opt-group>
                @for (item of group; track item) {
                    <button
                        tuiOption
                        type="button"
                        class="item"
                        (click)="onClick(item)"
                    >
                        {{ item }}
                        @if (itemIsActive(item)) {
                            <tui-icon icon="@tui.check" />
                        }
                    </button>
                }
            </tui-opt-group>
            <hr />
        }
    </tui-data-list>
</ng-template>
`;export{i as default};
