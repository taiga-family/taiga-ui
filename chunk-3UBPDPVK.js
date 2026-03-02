import"./chunk-HU6DUUP4.js";var e=`<h6 class="description">Single color</h6>
<p>
    Use
    <code [textContent]="'<progress />'"></code>
    's CSS-property
    <code>color</code>
    to set solid color of progress indicator.
</p>

<progress
    max="100"
    tuiProgressBar
    class="progress"
    [value]="fastValue$ | async"
></progress>

<h6 class="description">With fancy color gradient</h6>
<p>
    Set component's input property
    <code>color</code>
    to get more complex color combinations.
</p>

<progress
    color="linear-gradient(to right, var(--tui-chart-categorical-02), var(--tui-chart-categorical-14), var(--tui-chart-categorical-12))"
    max="100"
    tuiProgressBar
    class="progress"
    [value]="fastValue$ | async"
></progress>

<p>
    Use directive
    <code>tuiProgressFixedGradient</code>
    to make gradient fixed.
</p>

<progress
    color="linear-gradient(to right, var(--tui-chart-categorical-02), var(--tui-chart-categorical-14), var(--tui-chart-categorical-12))"
    max="100"
    tuiProgressBar
    tuiProgressFixedGradient
    class="progress"
    [value]="fastValue$ | async"
></progress>

<h6 class="description">Multicolor segments</h6>
<p>
    Use
    <code>tuiProgressColorSegments</code>
    directive to to get multicolor segments.
</p>

<progress
    max="100"
    tuiProgressBar
    class="progress"
    [tuiProgressColorSegments]="colors"
    [value]="fastValue$ | async"
></progress>

<progress
    tuiProgressBar
    class="progress"
    [max]="colors.length"
    [tuiProgressColorSegments]="colors"
    [value]="slowValue$ | async"
></progress>
`;export{e as default};
