import"./chunk-HU6DUUP4.js";var l=`<tui-range
    id="range-with-segments"
    size="m"
    class="range"
    [max]="max"
    [min]="min"
    [segments]="segments"
    [step]="step"
    [(ngModel)]="value"
/>

<div class="ticks-labels">
    @for (label of labels; track label) {
        <div>
            @if (label !== 75) {
                {{ label | i18nPlural: pluralMap }}
            } @else {
                <tui-icon icon="@tui.arrow-up" />
                <div>3/4</div>
            }
        </div>
    }
</div>

<p class="tui-space_top-12 tui-space_bottom-0">
    Control value:
    <output for="range-with-segments">
        <code>{{ value | json }}</code>
    </output>
</p>
`;export{l as default};
