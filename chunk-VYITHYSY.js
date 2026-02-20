import"./chunk-HU6DUUP4.js";var o=`<button
    tuiButton
    type="button"
    class="tui-space_bottom-5"
    (tuiHoveredChange)="onHovered($event)"
>
    Hover to reveal hidden text!
</button>

<p>
    Hidden Text Appears Here:
    <span
        class="text-style"
        [class.hidden]="!hovered"
    >
        You Just Hovered Over The Button!
    </span>
</p>
`;export{o as default};
