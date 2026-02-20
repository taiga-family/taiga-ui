import"./chunk-HU6DUUP4.js";var n=`<header>
    <tui-segmented
        class="colors"
        [(activeItemIndex)]="active"
    >
        @for (button of buttons; track button) {
            <button
                type="button"
                [class.active]="$index === active"
            >
                {{ button }}
            </button>
        }
    </tui-segmented>
</header>

<tui-segmented [style.border-radius.rem]="10">
    <button type="button">Border radius</button>
    <button type="button">Can be</button>
    <button type="button">Customized</button>
</tui-segmented>

<tui-segmented
    [style.flex-direction]="'column'"
    [style.font-weight]="'bold'"
>
    <button type="button">Fonts</button>
    <button type="button">Can also be</button>
    <button type="button">Overridden</button>
</tui-segmented>
`;export{n as default};
