import"./chunk-HU6DUUP4.js";var i=`<tui-tabs [(activeItemIndex)]="activeItemIndex">
    @for (step of steps; track step) {
        <button
            tuiTab
            type="button"
            class="step"
            [disabled]="$last"
            (click)="onClick(step)"
        >
            {{ step }}
        </button>
        @if (!$last) {
            <tui-icon
                icon="@tui.chevron-right"
                class="separator"
            />
        }
    }
</tui-tabs>

<tui-textfield class="tui-space_top-4">
    <label tuiLabel>activeItemIndex</label>

    <input
        tuiInputNumber
        [max]="2"
        [min]="0"
        [step]="1"
        [tuiNumberFormat]="{precision: 0}"
        [(ngModel)]="activeItemIndex"
    />
</tui-textfield>
`;export{i as default};
