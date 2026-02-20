import"./chunk-HU6DUUP4.js";var t=`<button
    appearance="outline"
    tuiButton
    type="button"
    class="button"
    (click)="isOpen = !isOpen"
>
    {{ isOpen ? 'Hide me' : 'Show opening crawl' }}
</button>

@if (isOpen) {
    <div
        tuiAnimated
        class="container"
    >
        A long time ago in a galaxy far, far away....
    </div>
}
`;export{t as default};
