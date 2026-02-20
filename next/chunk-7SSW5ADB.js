import"./chunk-HU6DUUP4.js";var l=`@for (item of data.children; track item) {
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
    <label
        tuiLabel
        class="tui-space_vertical-2 tui-space_left-1"
    >
        <input
            size="s"
            tuiCheckbox
            type="checkbox"
            [ngModel]="item | tuiMapper: getValue : map"
            (ngModelChange)="onChecked(item, $event)"
        />
        <small>{{ item.text }}</small>
    </label>
</ng-template>
`;export{l as default};
