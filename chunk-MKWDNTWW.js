import"./chunk-HU6DUUP4.js";var n=`<button
    #component
    tuiAvatar
    type="button"
    class="tui-space_right-3"
>
    C
</button>
<button
    #element="elementRef"
    tuiAvatar
    tuiElement
    type="button"
    class="tui-space_right-3"
>
    E
</button>
<p>
    component instanceof
    <code>TuiAvatar</code>
    :
    <b>{{ isLink(component) }}</b>
</p>
<p>
    element instanceof
    <code>ElementRef</code>
    :
    <b>{{ isElement(element) }}</b>
</p>
<button
    tuiButton
    type="button"
    (click)="element.nativeElement.focus()"
>
    Focus element
</button>
`;export{n as default};
