import {Component, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';

@Component({
    selector: `tui-editor-example-8`,
    templateUrl: `./index.html`,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import(`@taiga-ui/addon-editor/extensions/starter-kit`).then(
                    ({StarterKit}) => StarterKit,
                ),
                import(`@taiga-ui/addon-editor/extensions/image-editor`).then(
                    ({createImageEditorExtension}) =>
                        createImageEditorExtension(injector),
                ),
                import(`@tiptap/extension-link`).then(({Link}) =>
                    Link.configure({openOnClick: false}),
                ),
                import(`projects/addon-editor/extensions/jump-anchor`).then(
                    ({TuiJumpAnchor}) => TuiJumpAnchor,
                ),
            ],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorExample8 {
    readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Img,
        TuiEditorTool.Link,
        TuiEditorTool.Anchor,
    ];

    control = new FormControl(
        `<p><strong><em>War and Peace</em></strong> (<a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Russian_language">Russian</a>: Война и мир, <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Romanization_of_Russian">romanized</a>:&nbsp;<em>Voyna i mir</em>; <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Reforms_of_Russian_orthography">pre-reform Russian</a>: <strong>Война и миръ</strong>; <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Help:IPA/Russian">[vɐjˈna i ˈmʲir]</a>) is a literary work by the Russian author <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Leo_Tolstoy">Leo Tolstoy</a> that mixes fictional narrative with chapters on history and philosophy. It was first published serially, then published in its entirety in 1869. It is regarded as Tolstoy's finest literary achievement and remains an internationally praised classic of <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/World_literature">world literature</a>.<a target="_blank" rel="noopener noreferrer nofollow" href="#moser">[1]</a><a target="_blank" rel="noopener noreferrer nofollow" href="#thirlwell">[2]</a><a target="_blank" rel="noopener noreferrer nofollow" href="#briggs">[3]</a></p><p>The novel chronicles the <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/French_invasion_of_Russia">French invasion of Russia</a> and the impact of the <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Napoleonic_era">Napoleonic era</a> on <a target="_blank" rel="noopener noreferrer nofollow" class="my-custom-class mw-redirect" href="https://en.wikipedia.org/wiki/Tsarist">Tsarist</a> society through the stories of five Russian <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Aristocracy_(class)">aristocratic</a> families. Portions of an earlier version, titled <em>The Year 1805</em>,<a target="_blank" rel="noopener noreferrer nofollow" href="#introduction">[4] </a>were serialized in <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/The_Russian_Messenger"><em>The Russian Messenger</em></a> from 1865 to 1867 before the novel was published in its entirety in 1869.<a target="_blank" rel="noopener noreferrer nofollow" href="#knowles">[5]</a></p><p>Tolstoy said that the best <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Russian_literature">Russian literature</a> does not conform to standards and hence hesitated to classify <em>War and Peace</em>, saying it is "not a novel, even less is it a poem, and still less a historical chronicle". Large sections, especially the later chapters, are philosophical discussions rather than narrative.<a target="_blank" rel="noopener noreferrer nofollow" href="#war">[6]</a> He regarded <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Anna_Karenina"><em>Anna Karenina</em></a> as his first true novel.</p><p></p><img src="./assets/images/piece-and-war.jpg" width="732" alt="" title="" data-type="image-editor"><p></p><p><strong>References</strong>:</p><ol><li><p><a data-type="jump-anchor" id="moser">Moser</a>, Charles. 1992. <em>Encyclopedia of Russian Literature</em>. Cambridge University Press, pp. 298–300.</p></li><li><p><a data-type="jump-anchor" id="thirlwell">Thirlwell</a>, Adam <a target="_blank" rel="noopener noreferrer nofollow" class="external text" href="https://www.theguardian.com/books/2005/oct/08/classics.leonikolaevichtolstoy">"A masterpiece in miniature"</a>. <em>The Guardian</em> (London, UK) October 8, 2005</p></li><li><p><a data-type="jump-anchor" id="briggs">Briggs</a>, Anthony. 2005. "Introduction" to <em>War and Peace</em>. Penguin Classics.</p><p></p><p></p><p></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Richard_Pevear_and_Larissa_Volokhonsky">Pevear, Richard</a> (2008). "<a data-type="jump-anchor" id="introduction">Introduction</a>". <a target="_blank" rel="noopener noreferrer nofollow" class="external text" href="https://archive.org/details/warpeace00tols_1"><em>War and Peace</em></a>. Trans. Pevear; <a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Richard_Pevear_and_Larissa_Volokhonsky">Volokhonsky, Larissa</a>. New York: Vintage Books. pp.&nbsp;VIII–IX. <a target="_blank" rel="noopener noreferrer nofollow" class="mw-redirect" href="https://en.wikipedia.org/wiki/ISBN_(identifier)">ISBN</a>&nbsp;<a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Special:BookSources/978-1-4000-7998-8">978-1-4000-7998-8</a>.</p><p></p></li><li><p><a data-type="jump-anchor" id="knowles">Knowles</a>, A. V. <em>Leo Tolstoy</em>, Routledge 1997.</p><p></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" class="external text" href="https://books.google.com/books?id=c4HEAN-ti1MC&amp;pg=PR10">"Introduction?"</a>. <a data-type="jump-anchor" id="war"><em>War and Peace</em></a>. Wordsworth Editions. 1993. <a target="_blank" rel="noopener noreferrer nofollow" class="mw-redirect" href="https://en.wikipedia.org/wiki/ISBN_(identifier)">ISBN</a>&nbsp;<a target="_blank" rel="noopener noreferrer nofollow" href="https://en.wikipedia.org/wiki/Special:BookSources/978-1-85326-062-9">978-1-85326-062-9</a>. Retrieved 2009-03-24.</p></li></ol>`,
    );
}
