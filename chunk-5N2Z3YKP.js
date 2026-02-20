import"./chunk-HU6DUUP4.js";var i=`<div class="tui-space_bottom-4">Choose a department:</div>

<div class="filters-with-all">
    <button
        appearance="outline-grayscale"
        size="m"
        tuiButton
        type="button"
        class="item tui-space_right-1 tui-space_bottom-1"
        [tuiAppearanceMode]="checked$ | async"
        (click)="toggleAll()"
    >
        All
    </button>

    <tui-filter
        size="m"
        class="item"
        [items]="items"
        [ngModel]="model$ | async"
        (ngModelChange)="onModelChange($event)"
    />
</div>
`;export{i as default};
