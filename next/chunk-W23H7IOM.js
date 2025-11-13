import"./chunk-42JZD6NG.js";var e=`<button
    tuiButton
    tuiChevron
    tuiDropdownOpen
    type="button"
    [tuiDropdown]="content"
>
    Menu
</button>
<ng-template #content>
    <tui-data-list role="menu">
        @for (group of groups; track group) {
            <tui-opt-group [label]="group.label">
                @for (item of group.items; track item) {
                    <a
                        #rla="routerLinkActive"
                        role="menuitemradio"
                        routerLinkActive
                        tuiOption
                        [attr.aria-checked]="rla.isActive"
                        [routerLink]="item.routerLink"
                    >
                        {{ item.label }}
                        @if (rla.isActive) {
                            <tui-icon icon="@tui.check" />
                        }
                    </a>
                }
            </tui-opt-group>
        }
    </tui-data-list>
</ng-template>
`;export{e as default};
