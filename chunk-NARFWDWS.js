import"./chunk-HU6DUUP4.js";var o=`<p>
    Dark mode:
    <code>{{ darkMode() }}</code>
</p>
<div class="buttons">
    <button
        size="s"
        tuiButton
        type="button"
        (click)="darkMode.set(true)"
    >
        Enable dark
    </button>
    <button
        size="s"
        tuiButton
        type="button"
        (click)="darkMode.set(false)"
    >
        Enable light
    </button>
    <button
        appearance="outline"
        size="s"
        tuiButton
        type="button"
        (click)="darkMode.reset()"
    >
        Reset to system
    </button>
</div>
`;export{o as default};
