import"./chunk-HU6DUUP4.js";var i=`<tui-accordion
    tuiConnected
    class="accordion"
>
    @for (item of steps | keyvalue: orderBy; track item) {
        <button
            appearance="icon"
            [tuiAccordion]="$index === 1"
        >
            <div
                [appearance]="isChecked(item.value.steps) ? 'info' : ''"
                [tuiAvatar]="isChecked(item.value.steps) ? '@tui.check' : ''"
            ></div>
            {{ item.key }}
        </button>
        <tui-expand>
            {{ item.value.text }}
            @for (step of item.value.steps; track step) {
                <label tuiCell>
                    <input
                        tuiCheckbox
                        type="checkbox"
                        [ngModel]="selected.includes(step)"
                        (ngModelChange)="toggle(step)"
                    />
                    <span tuiTitle>{{ step }}</span>
                </label>
            }
        </tui-expand>
    }
</tui-accordion>
`;export{i as default};
