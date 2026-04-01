import"./chunk-HU6DUUP4.js";var o=`<tui-textfield [content]="control.value?.daySame(today) ? 'Today' : ''">
    <label tuiLabel>Choose a date</label>
    <input
        tuiInputDate
        [formControl]="control"
    />
    <ng-template
        let-close
        tuiDropdown
    >
        <tui-calendar />
        <button
            appearance="action"
            size="m"
            tuiButton
            type="button"
            class="button"
            (click)="control.setValue(today); close()"
        >
            Today
        </button>
    </ng-template>
</tui-textfield>
`;export{o as default};
