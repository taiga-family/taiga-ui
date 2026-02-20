import"./chunk-HU6DUUP4.js";var p=`<p (tuiHoveredChange)="onHovered($event)">
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
    <span tuiBadge>{{ counterCSS }}</span>
</p>
<p>
    ngIf:
    <span tuiBadge>{{ counterIf }}</span>
</p>
`;export{p as default};
