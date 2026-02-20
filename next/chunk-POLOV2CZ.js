import"./chunk-HU6DUUP4.js";var e=`<tui-textfield
    tuiTextfieldSize="m"
    class="slider"
>
    <input
        tuiInputSlider
        [max]="6"
        [min]="0"
        [(ngModel)]="sidePadding"
    />
    <span>sidePadding</span>
    <input
        tuiSlider
        type="range"
        [step]="1"
    />
</tui-textfield>

<tui-pagination
    [index]="10"
    [length]="64"
    [sidePadding]="sidePadding"
/>
`;export{e as default};
