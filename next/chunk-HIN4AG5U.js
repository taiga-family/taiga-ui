import"./chunk-B4AJQJMI.js";var t=`<p (tuiHoveredChange)="onHovered($event)">
    Hover
    <span
        [class.hidden]="!hovered"
        (tuiPresent)="onCSS($event)"
    >
        I am a component hidden with CSS
    </span>
    @if (hovered) {
        <span (tuiPresent)="onIf($event)">I am a component hidden with *ngIf</span>
    }
</p>
<p>Counter of component appearance minus counter of its disappearance:</p>
<p>
    CSS:
    <tui-badge>{{ counterCSS }}</tui-badge>
</p>
<p>
    ngIf:
    <tui-badge>{{ counterIf }}</tui-badge>
</p>
`;export{t as default};
