import"./chunk-LQ6M4NCU.js";var o=`Dark mode enabled: {{ darkMode() }}
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
Global dark theme is automatic and based on OS settings, unless you provide explicit value into
<code>provideTaiga()</code>
`;export{o as default};
