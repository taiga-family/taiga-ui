import"./chunk-42JZD6NG.js";var e=`<tui-textfield
    tuiTextfieldSize="m"
    class="slider"
>
    <input
        tuiInputSlider
        [max]="6"
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
