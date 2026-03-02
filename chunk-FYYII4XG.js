import"./chunk-HU6DUUP4.js";var i=`<tui-textfield
    iconStart="@tui.heart"
    multi
    [style.width.rem]="19"
>
    <input
        tuiInputChip
        [formControl]="control"
        [placeholder]="!control.value?.length ? 'Type something' : ''"
    />
    <tui-icon tuiTooltip="Only small words" />
    <tui-input-chip
        *tuiItem="let context"
        [appearance]="context.item.length > 5 ? 'negative' : 'positive'"
        [editable]="false"
        [iconStart]="context.item.length > 5 ? '@tui.info' : ''"
        [tuiHint]="context.item.length > 5 ? 'Please keep it under 6 chars' : ''"
    />
</tui-textfield>
`;export{i as default};
