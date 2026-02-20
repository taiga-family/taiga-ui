import"./chunk-HU6DUUP4.js";var n=`<tui-textfield
    tuiTextfieldSize="m"
    class="slider"
>
    <input
        tuiInputSlider
        [max]="length - 1"
        [min]="0"
        [(ngModel)]="index"
    />
    <span>index</span>
    <input
        tuiSlider
        type="range"
    />
</tui-textfield>

<tui-pagination
    [index]="index"
    [length]="length"
    (indexChange)="goToPage($event)"
/>
`;export{n as default};
