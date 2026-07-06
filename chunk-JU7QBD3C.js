import"./chunk-HU6DUUP4.js";var i=`<button
    appearance="flat"
    tuiButton
    tuiChevron
    tuiDropdownLimitWidth="min"
    type="button"
    [tuiDropdown]="content"
    [(tuiDropdownOpen)]="open"
>
    Why Taiga UI?
</button>

<ng-template #content>
    <tui-data-list [style.max-inline-size.rem]="35">
        @for (group of groups; track group) {
            <tui-opt-group [label]="group.label">
                @for (item of group.items; track item) {
                    <button
                        tuiOption
                        type="button"
                        (click)="open = false"
                    >
                        {{ item }}
                    </button>
                }
            </tui-opt-group>
        }
    </tui-data-list>
</ng-template>
`;export{i as default};
