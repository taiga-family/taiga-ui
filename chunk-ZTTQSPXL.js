import"./chunk-HU6DUUP4.js";var e=`<tui-textfield
    tuiTextfieldSize="m"
    class="slider"
>
    <input
        tuiInputSlider
        [max]="6"
        [min]="0"
        [(ngModel)]="activePadding"
    />
    <span>activePadding</span>
    <input
        tuiSlider
        type="range"
    />
</tui-textfield>

<tui-pagination
    [activePadding]="activePadding"
    [index]="10"
    [length]="64"
/>
`;export{e as default};
