import"./chunk-42JZD6NG.js";var n=`<div
    class="t-container"
    (tuiZoom)="onZoom($event)"
>
    <div
        class="t-zoomable"
        [style.transform]="transform$ | async"
    >
        <span>{{ scale$ | async | number: '1.0-3' }}</span>
    </div>
</div>
`;export{n as default};
