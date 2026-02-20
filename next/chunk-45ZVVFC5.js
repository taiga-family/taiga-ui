import"./chunk-HU6DUUP4.js";var i=`<label tuiLabel>
    I am a label
    <tui-textfield
        iconStart="@tui.user-round"
        tuiChevron
        tuiTextfieldSize="m"
        [tuiTextfieldCleaner]="false"
    >
        <input
            placeholder="I am placeholder"
            tuiSelect
            [(ngModel)]="value"
        />

        <tui-data-list-wrapper
            *tuiDropdown
            [items]="users"
        />

        @if (value) {
            <tui-icon
                icon="@tui.badge-check"
                style="color: var(--tui-status-info); pointer-events: none"
            />
        }

        <tui-icon tuiTooltip="I am a hint" />
    </tui-textfield>
</label>
`;export{i as default};
