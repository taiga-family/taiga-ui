import"./chunk-HU6DUUP4.js";var e=`Dark mode enabled: {{ darkMode() }}
<p>
    <button
        tuiButton
        type="button"
        (click)="darkMode.set(!darkMode())"
    >
        Toggle
    </button>
    <button
        tuiButton
        type="button"
        (click)="darkMode.reset()"
    >
        Reset
    </button>
</p>
<p>Add to Root to enable:</p>
<code>&lt;tui-root [attr.tuiTheme]="darkMode() ? 'dark' : null"&gt;&lt;/tui-root&gt;</code>
`;export{e as default};
