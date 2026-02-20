import"./chunk-HU6DUUP4.js";var t=`<div class="flex">
    <tui-axes
        class="axes"
        [axisXLabels]="labelsX"
        [axisYLabels]="labelsY"
    >
        <tui-bar-chart
            [max]="10000"
            [tuiHintAppearance]="appearance"
            [tuiHintContent]="hint"
            [value]="value"
        />
    </tui-axes>

    <tui-axes
        class="axes"
        [axisXLabels]="labelsX"
        [axisYLabels]="labelsY"
    >
        <tui-bar-chart
            [collapsed]="true"
            [max]="10000"
            [tuiHintAppearance]="appearance"
            [tuiHintContent]="hint"
            [value]="value"
        />
    </tui-axes>
</div>

<tui-textfield
    tuiChevron
    class="select"
>
    <label tuiLabel>Hint appearance</label>

    <input
        tuiSelect
        [(ngModel)]="appearance"
    />
    <tui-data-list-wrapper
        *tuiDropdown
        [items]="appearances"
    />
</tui-textfield>
`;export{t as default};
