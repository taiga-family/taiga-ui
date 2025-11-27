import"./chunk-42JZD6NG.js";var u=`<tui-textfield [tuiTextfieldCleaner]="false">
    <input
        #input
        placeholder="Input value"
        tuiInput
        [(ngModel)]="value"
    />

    @if (value) {
        <button
            iconStart="@tui.circle-x"
            tabindex="-1"
            tuiIconButton
            type="button"
            (click)="clear()"
            (pointerdown.zoneless.prevent)="input.focus()"
        >
            Clear
        </button>
    }
</tui-textfield>
`;export{u as default};
