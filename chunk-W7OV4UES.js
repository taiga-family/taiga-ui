import"./chunk-B4AJQJMI.js";var i=`<p class="text">
    Your balance:
    <span>{{ data | tuiAmount: 'RUB' }}</span>
</p>

<tui-textfield tuiTextfieldSize="m">
    <input
        tuiAutoFocus
        tuiInput
        [(ngModel)]="name"
    />
    <label tuiLabel>Type a name</label>
</tui-textfield>

<tui-textfield
    tuiChevron
    tuiTextfieldSize="m"
    class="tui-space_top-3 tui-space_bottom-5"
>
    <input
        placeholder="Select a sum"
        tuiSelect
        [(ngModel)]="value"
    />

    <tui-data-list-wrapper
        *tuiDropdown
        [items]="items"
    />
</tui-textfield>

<input
    tuiSlider
    type="range"
    class="tui-space_bottom-5"
    [max]="10"
    [ngModel]="5"
/>

<button
    size="m"
    tuiButton
    type="button"
    [disabled]="!hasValue"
    (click)="submit()"
>
    Submit
</button>

<p>
    <button
        size="m"
        tuiButton
        type="button"
        (click)="showDialog(template)"
    >
        Show one more dialog
    </button>
</p>

<ng-template #template>
    <div class="dialog">
        <p>This one is a template dialog</p>
    </div>
</ng-template>
`;export{i as default};
