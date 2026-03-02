import"./chunk-HU6DUUP4.js";var i=`<tui-axes
    class="axes"
    [horizontalLines]="3"
    [verticalLines]="5"
>
    <tui-line-chart
        [height]="200"
        [tuiHintContent]="hint"
        [value]="value"
        [width]="400"
        [x]="0"
        [y]="0"
    />
</tui-axes>

<tui-axes
    class="axes tui-space_top-10"
    [horizontalLines]="2"
    [verticalLines]="4"
>
    <tui-line-chart
        tuiHintAppearance="error"
        [dots]="true"
        [height]="200"
        [tuiHintContent]="hintContent"
        [value]="singleValue"
        [width]="400"
        [x]="0"
        [y]="0"
    />
</tui-axes>

<ng-template
    #hintContent
    let-index="index"
    let-value
>
    <div>Vertical: {{ value[0] }}</div>
    <div>Horizontal: {{ value[1] }}</div>
    <div>index: {{ index }}</div>
</ng-template>
`;export{i as default};
