import"./chunk-HU6DUUP4.js";var o=`<p>
    Make right click on this icon ->
    <tui-icon
        #dropdown="tuiDropdown"
        icon="@tui.settings"
        tuiDropdownContext
        class="icon"
        [tuiDropdown]="content"
    >
        <ng-template #content>
            <span class="text">Nothing special</span>
            <button
                appearance="icon"
                iconStart="@tui.x"
                size="xs"
                tuiIconButton
                type="button"
                (click)="dropdown.toggle(false)"
            >
                Close
            </button>
        </ng-template>
    </tui-icon>
</p>
`;export{o as default};
