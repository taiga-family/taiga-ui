import"./chunk-LQ6M4NCU.js";var n=`<tui-pie-chart
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
