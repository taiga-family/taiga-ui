import"./chunk-HU6DUUP4.js";var a=`<tui-textfield
    class="index-controller"
    [tuiTextfieldCleaner]="false"
>
    <label tuiLabel>activeItemIndex</label>

    <input
        tuiInputNumber
        [max]="value.length - 1"
        [min]="0"
        [ngModel]="activeItemIndex"
        [step]="1"
        [tuiNumberFormat]="{precision: 0}"
        (ngModelChange)="onTextfieldChange($event)"
    />
</tui-textfield>

<div class="wrapper">
    <tui-arc-chart
        size="m"
        class="tui-space_right-4"
        [value]="value"
        [(activeItemIndex)]="activeItemIndex"
    >
        Total value
    </tui-arc-chart>
    <tui-arc-chart
        size="l"
        class="tui-space_right-4"
        [value]="value"
        [(activeItemIndex)]="activeItemIndex"
    >
        Total value
        <div>Label</div>
    </tui-arc-chart>
    <tui-arc-chart
        size="xl"
        class="tui-space_right-4"
        [value]="value"
        [(activeItemIndex)]="activeItemIndex"
    >
        <span>{{ 123456 | tuiAmount: 'RUB' }}</span>
        <div>Not bad!</div>
    </tui-arc-chart>
</div>
`;export{a as default};
