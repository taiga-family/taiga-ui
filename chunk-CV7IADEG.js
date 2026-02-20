import"./chunk-HU6DUUP4.js";var n=`<tui-pie-chart
    [tuiHintContent]="content"
    [value]="value"
/>

<ng-template
    #content
    let-index
>
    <span>{{ value[index] || 0 | tuiAmount: 'RUB' }}</span>
    <div>{{ labels[index] }}</div>
</ng-template>
`;export{n as default};
