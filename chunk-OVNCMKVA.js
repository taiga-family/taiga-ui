import"./chunk-HU6DUUP4.js";var o=`<tui-tree
    [childrenHandler]="handler"
    [content]="content"
    [map]="map"
    [tuiTreeController]="false"
    [value]="data"
/>

<ng-template
    #content
    let-item
>
    {{ item.text }}
</ng-template>

<p>
    <button
        size="s"
        tuiButton
        type="button"
        class="programmatic tui-space_right-2"
        (click)="toggleTopmost()"
    >
        Toggle Topmost
    </button>
</p>
<p>
    <button
        size="s"
        tuiButton
        type="button"
        class="programmatic"
        (click)="toggleLevel(0)"
    >
        Toggle Top level 1
    </button>
</p>
<button
    size="s"
    tuiButton
    type="button"
    class="programmatic"
    (click)="toggleLevel(2)"
>
    Toggle Top level 3
</button>
`;export{o as default};
