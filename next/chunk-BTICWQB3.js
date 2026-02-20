import"./chunk-HU6DUUP4.js";var a=`@for (_ of '-'.repeat(4); track $index) {
    <label
        tuiSurface
        [style.border-radius.rem]="0.75"
        [style.padding.rem]="1.25"
    >
        Item {{ $index + 1 }}
        <input
            tuiSurfaceLayer
            type="radio"
            [value]="$index"
            [(ngModel)]="value"
        />
        <div
            tuiRipple
            tuiSurfaceLayer
            [style.background-color]="'var(--tui-background-neutral-1)'"
        ></div>
    </label>
}
`;export{a as default};
