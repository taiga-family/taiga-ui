import"./chunk-HU6DUUP4.js";var n=`@for (item of data.children; track item) {
    <tui-tree
        [childrenHandler]="handler"
        [content]="content"
        [tuiTreeController]="true"
        [value]="item"
    />
}

<ng-template
    #content
    let-item
>
    {{ item.text }}
</ng-template>
`;export{n as default};
