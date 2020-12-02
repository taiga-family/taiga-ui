/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/hy", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n));
        if (i === 0 || i === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'hy',
        [['ա', 'հ'], ['AM', 'PM'], u],
        [['AM', 'PM'], u, u],
        [
            ['Կ', 'Ե', 'Ե', 'Չ', 'Հ', 'Ո', 'Շ'],
            ['կիր', 'երկ', 'երք', 'չրք', 'հնգ', 'ուր', 'շբթ'],
            [
                'կիրակի', 'երկուշաբթի', 'երեքշաբթի', 'չորեքշաբթի',
                'հինգշաբթի', 'ուրբաթ', 'շաբաթ'
            ],
            ['կր', 'եկ', 'եք', 'չք', 'հգ', 'ու', 'շբ']
        ],
        u,
        [
            ['Հ', 'Փ', 'Մ', 'Ա', 'Մ', 'Հ', 'Հ', 'Օ', 'Ս', 'Հ', 'Ն', 'Դ'],
            [
                'հնվ', 'փտվ', 'մրտ', 'ապր', 'մյս', 'հնս', 'հլս', 'օգս', 'սեպ',
                'հոկ', 'նոյ', 'դեկ'
            ],
            [
                'հունվարի', 'փետրվարի', 'մարտի', 'ապրիլի', 'մայիսի',
                'հունիսի', 'հուլիսի', 'օգոստոսի', 'սեպտեմբերի',
                'հոկտեմբերի', 'նոյեմբերի', 'դեկտեմբերի'
            ]
        ],
        [
            ['Հ', 'Փ', 'Մ', 'Ա', 'Մ', 'Հ', 'Հ', 'Օ', 'Ս', 'Հ', 'Ն', 'Դ'],
            [
                'հնվ', 'փտվ', 'մրտ', 'ապր', 'մյս', 'հնս', 'հլս', 'օգս', 'սեպ',
                'հոկ', 'նոյ', 'դեկ'
            ],
            [
                'հունվար', 'փետրվար', 'մարտ', 'ապրիլ', 'մայիս', 'հունիս',
                'հուլիս', 'օգոստոս', 'սեպտեմբեր', 'հոկտեմբեր',
                'նոյեմբեր', 'դեկտեմբեր'
            ]
        ],
        [['մ.թ.ա.', 'մ.թ.'], u, ['Քրիստոսից առաջ', 'Քրիստոսից հետո']],
        1,
        [6, 0],
        ['dd.MM.yy', 'dd MMM, y թ.', 'dd MMMM, y թ.', 'y թ. MMMM d, EEEE'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1}, {0}', u, u, u],
        [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'ՈչԹ', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'],
        'AMD',
        '֏',
        'հայկական դրամ',
        { 'AMD': ['֏'], 'JPY': ['JP¥', '¥'], 'THB': ['฿'], 'TWD': ['NT$'] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9oeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0JBQWU7UUFDYixJQUFJO1FBQ0osQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDakQ7Z0JBQ0UsUUFBUSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWTtnQkFDakQsV0FBVyxFQUFFLFFBQVEsRUFBRSxPQUFPO2FBQy9CO1lBQ0QsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7U0FDM0M7UUFDRCxDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVEO2dCQUNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztnQkFDN0QsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO2FBQ3BCO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVE7Z0JBQ25ELFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVk7Z0JBQzlDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWTthQUN4QztTQUNGO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVEO2dCQUNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztnQkFDN0QsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO2FBQ3BCO1lBQ0Q7Z0JBQ0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRO2dCQUN4RCxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXO2dCQUM3QyxVQUFVLEVBQUUsV0FBVzthQUN4QjtTQUNGO1FBQ0QsQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDTixDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDO1FBQ2xFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO1FBQ3BELENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFDNUMsS0FBSztRQUNMLEdBQUc7UUFDSCxlQUFlO1FBQ2YsRUFBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDakUsS0FBSztRQUNMLE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSk7XG4gIGlmIChpID09PSAwIHx8IGkgPT09IDEpIHJldHVybiAxO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnaHknLFxuICBbWyfVoScsICfVsCddLCBbJ0FNJywgJ1BNJ10sIHVdLFxuICBbWydBTScsICdQTSddLCB1LCB1XSxcbiAgW1xuICAgIFsn1L8nLCAn1LUnLCAn1LUnLCAn1YknLCAn1YAnLCAn1YgnLCAn1YcnXSxcbiAgICBbJ9Wv1avWgCcsICfVpdaA1a8nLCAn1aXWgNaEJywgJ9W51oDWhCcsICfVsNW21aMnLCAn1bjWgtaAJywgJ9W31aLVqSddLFxuICAgIFtcbiAgICAgICfVr9Wr1oDVodWv1asnLCAn1aXWgNWv1bjWgtW31aHVotWp1asnLCAn1aXWgNWl1oTVt9Wh1aLVqdWrJywgJ9W51bjWgNWl1oTVt9Wh1aLVqdWrJyxcbiAgICAgICfVsNWr1bbVo9W31aHVotWp1asnLCAn1bjWgtaA1aLVodWpJywgJ9W31aHVotWh1aknXG4gICAgXSxcbiAgICBbJ9Wv1oAnLCAn1aXVrycsICfVpdaEJywgJ9W51oQnLCAn1bDVoycsICfVuNaCJywgJ9W31aInXVxuICBdLFxuICB1LFxuICBbXG4gICAgWyfVgCcsICfVkycsICfVhCcsICfUsScsICfVhCcsICfVgCcsICfVgCcsICfVlScsICfVjScsICfVgCcsICfVhicsICfUtCddLFxuICAgIFtcbiAgICAgICfVsNW21b4nLCAn1oPVv9W+JywgJ9W01oDVvycsICfVodW61oAnLCAn1bTVtdW9JywgJ9Ww1bbVvScsICfVsNWs1b0nLCAn1oXVo9W9JywgJ9W91aXVuicsXG4gICAgICAn1bDVuNWvJywgJ9W21bjVtScsICfVpNWl1a8nXG4gICAgXSxcbiAgICBbXG4gICAgICAn1bDVuNaC1bbVvtWh1oDVqycsICfWg9Wl1b/WgNW+1aHWgNWrJywgJ9W01aHWgNW/1asnLCAn1aHVutaA1avVrNWrJywgJ9W01aHVtdWr1b3VqycsXG4gICAgICAn1bDVuNaC1bbVq9W91asnLCAn1bDVuNaC1azVq9W91asnLCAn1oXVo9W41b3Vv9W41b3VqycsICfVvdWl1brVv9Wl1bTVotWl1oDVqycsXG4gICAgICAn1bDVuNWv1b/VpdW01aLVpdaA1asnLCAn1bbVuNW11aXVtNWi1aXWgNWrJywgJ9Wk1aXVr9W/1aXVtNWi1aXWgNWrJ1xuICAgIF1cbiAgXSxcbiAgW1xuICAgIFsn1YAnLCAn1ZMnLCAn1YQnLCAn1LEnLCAn1YQnLCAn1YAnLCAn1YAnLCAn1ZUnLCAn1Y0nLCAn1YAnLCAn1YYnLCAn1LQnXSxcbiAgICBbXG4gICAgICAn1bDVttW+JywgJ9aD1b/VvicsICfVtNaA1b8nLCAn1aHVutaAJywgJ9W01bXVvScsICfVsNW21b0nLCAn1bDVrNW9JywgJ9aF1aPVvScsICfVvdWl1bonLFxuICAgICAgJ9Ww1bjVrycsICfVttW41bUnLCAn1aTVpdWvJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ9Ww1bjWgtW21b7VodaAJywgJ9aD1aXVv9aA1b7VodaAJywgJ9W01aHWgNW/JywgJ9Wh1brWgNWr1awnLCAn1bTVodW11avVvScsICfVsNW41oLVttWr1b0nLFxuICAgICAgJ9Ww1bjWgtWs1avVvScsICfWhdWj1bjVvdW/1bjVvScsICfVvdWl1brVv9Wl1bTVotWl1oAnLCAn1bDVuNWv1b/VpdW01aLVpdaAJyxcbiAgICAgICfVttW41bXVpdW01aLVpdaAJywgJ9Wk1aXVr9W/1aXVtNWi1aXWgCdcbiAgICBdXG4gIF0sXG4gIFtbJ9W0LtWpLtWhLicsICfVtC7VqS4nXSwgdSwgWyfVlNaA1avVvdW/1bjVvdWr1oEg1aHVvNWh1bsnLCAn1ZTWgNWr1b3Vv9W41b3Vq9aBINWw1aXVv9W4J11dLFxuICAxLFxuICBbNiwgMF0sXG4gIFsnZGQuTU0ueXknLCAnZGQgTU1NLCB5INWpLicsICdkZCBNTU1NLCB5INWpLicsICd5INWpLiBNTU1NIGQsIEVFRUUnXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0sIHswfScsIHUsIHUsIHVdLFxuICBbJywnLCAnwqAnLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAn1YjVudS5JywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSxcbiAgJ0FNRCcsXG4gICfWjycsXG4gICfVsNWh1bXVr9Wh1a/VodW2INWk1oDVodW0JyxcbiAgeydBTUQnOiBbJ9aPJ10sICdKUFknOiBbJ0pQwqUnLCAnwqUnXSwgJ1RIQic6IFsn4Li/J10sICdUV0QnOiBbJ05UJCddfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==