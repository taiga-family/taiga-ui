import"./chunk-LQ6M4NCU.js";var e=`<div
    class="t-container"
    (tuiZoom)="onZoom($event)"
>
    <div
        class="t-zoomable"
        [style.scale]="scale$ | async"
    >
        <span>{{ scale$ | async | number: '1.0-3' }}</span>
    </div>
</div>
`;export{e as default};
