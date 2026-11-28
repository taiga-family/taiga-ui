import"./chunk-LQ6M4NCU.js";var n=`<button
    tuiButton
    type="button"
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
`;export{n as default};
