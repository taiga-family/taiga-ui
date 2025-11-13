import"./chunk-42JZD6NG.js";var i=`<tui-textfield
    iconStart="@tui.search"
    tuiChevron
    tuiTextfieldSize="m"
    [tuiTextfieldCleaner]="false"
>
    <label tuiLabel>I am a label</label>

    <input
        placeholder="I am placeholder"
        tuiComboBox
        [(ngModel)]="value"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        new
        [items]="cities | tuiFilterByInput"
    />

    @if (value) {
        <tui-icon
            icon="@tui.check"
            style="color: var(--tui-status-positive); pointer-events: none"
        />
    }

    <tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
`;export{i as default};
