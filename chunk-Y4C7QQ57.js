import"./chunk-HU6DUUP4.js";var l=`<tui-tree
    [childrenHandler]="childrenHandler"
    [content]="content"
    [map]="map"
    [tuiTreeController]="false"
    [value]="service.data$ | async"
    (toggled)="onToggled($event)"
/>

<ng-template
    #content
    let-item
>
    @if (item === loading) {
        <tui-loader class="loader" />
    } @else {
        {{ item.text }}
    }
</ng-template>
`;export{l as default};
