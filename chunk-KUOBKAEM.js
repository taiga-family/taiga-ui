import"./chunk-HU6DUUP4.js";var e=`<ul class="task">
    <li>
        I
        <tui-input-inline>
            <input ngModel="am" />
        </tui-input-inline>
        funny.
    </li>

    <li>
        He
        <tui-input-inline [class._empty]="!answer">
            <!-- Any text inside tui-input-inline is placeholder-->
            <!-- It will be shown fully even for unset width of InputInline -->
            ___
            <input [(ngModel)]="answer" />
        </tui-input-inline>
        funny.
    </li>

    <li>
        You
        <tui-input-inline [style.max-width.ch]="15">
            <input
                ngModel=""
                placeholder="___"
                spellcheck="false"
            />
        </tui-input-inline>
        funny.
    </li>
</ul>

<section class="task">
    <p>
        <strong>Writing practice</strong>
        <br />
        Learning to
        <s>write</s>
        type underscore and hyphen
    </p>
    <!-- prettier-ignore -->
    <div>
        ___<tui-input-inline>
        <input
            ngModel=""
            placeholder="___"
        />
    </tui-input-inline>------<tui-input-inline>
        <input
            ngModel=""
            placeholder="------"
        />
    </tui-input-inline>
    </div>
</section>
`;export{e as default};
