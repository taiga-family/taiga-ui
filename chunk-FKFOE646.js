import"./chunk-HU6DUUP4.js";var n=`<div
    tuiAppearance="secondary"
    type="button"
>
    Non-interactive elements do not react to pointer
</div>

<button
    tuiAppearance="secondary"
    type="button"
>
    Hovered state is only triggered on devices with pointer
</button>

<button
    tuiAppearance="secondary"
    tuiDropdown="Button looks hovered when dropdown is open"
    type="button"
    [tuiAppearanceState]="open ? 'hover' : null"
    [(tuiDropdownOpen)]="open"
>
    Triggering state manually
</button>
`;export{n as default};
