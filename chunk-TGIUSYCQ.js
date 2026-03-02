import"./chunk-HU6DUUP4.js";var n=`<tui-tree
    [childrenHandler]="handler"
    [content]="content"
    [tuiTreeController]="true"
    [value]="data"
/>

<ng-template
    #content
    let-node="node"
    let-value
>
    <div
        class="wrapper"
        [style.opacity]="1 / node.level"
    >
        @if (value.icon) {
            <tui-icon
                class="t-icon"
                [icon]="value.icon"
            />
        }
        {{ value.text }}
    </div>
</ng-template>
`;export{n as default};
