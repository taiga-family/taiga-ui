import"./chunk-HU6DUUP4.js";var e=`<tui-textfield iconEnd="@tui.scaling">
    <label tuiLabel>Container</label>
    <input
        postfix="px"
        tuiInputSlider
        [max]="48"
        [min]="16"
        [(ngModel)]="container"
    />
    <input
        tuiSlider
        type="range"
    />
</tui-textfield>

<tui-textfield iconEnd="@tui.image-upscale">
    <label tuiLabel>Icon</label>
    <input
        postfix="px"
        tuiInputSlider
        [max]="48"
        [min]="16"
        [(ngModel)]="icon"
    />
    <input
        tuiSlider
        type="range"
    />
</tui-textfield>

<tui-textfield iconEnd="@tui.line-squiggle">
    <label tuiLabel>Stroke</label>
    <input
        postfix="px"
        tuiInputSlider
        [max]="3"
        [min]="1"
        [tuiNumberFormat]="{precision: 1}"
        [(ngModel)]="thickness"
    />
    <input
        tuiSlider
        type="range"
        [step]="0.1"
    />
</tui-textfield>

<tui-icon
    icon="@tui.user"
    [style.--tui-stroke-width.px]="thickness"
    [style.block-size.px]="container"
    [style.font-size.px]="icon"
    [style.inline-size.px]="container"
/>
`;export{e as default};
