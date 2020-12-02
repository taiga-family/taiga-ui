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
        define("@angular/common/locales/pt-ST", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n));
        if (i === Math.floor(i) && i >= 0 && i <= 1)
            return 1;
        return 5;
    }
    exports.default = [
        'pt-ST',
        [['a.m.', 'p.m.'], u, ['da manhã', 'da tarde']],
        [['a.m.', 'p.m.'], u, ['manhã', 'tarde']],
        [
            ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
            [
                'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira',
                'sábado'
            ],
            ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
        ],
        u,
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            [
                'jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'
            ],
            [
                'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro',
                'outubro', 'novembro', 'dezembro'
            ]
        ],
        u,
        [['a.C.', 'd.C.'], u, ['antes de Cristo', 'depois de Cristo']],
        1,
        [6, 0],
        ['dd/MM/yy', 'dd/MM/y', 'd \'de\' MMMM \'de\' y', 'EEEE, d \'de\' MMMM \'de\' y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1}, {0}', u, '{1} \'às\' {0}', u],
        [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'],
        'STN',
        'Db',
        'dobra de São Tomé e Príncipe',
        {
            'AUD': ['AU$', '$'],
            'JPY': ['JP¥', '¥'],
            'PTE': ['​'],
            'RON': [u, 'L'],
            'STN': ['Db'],
            'THB': ['฿'],
            'TWD': ['NT$'],
            'USD': ['US$', '$']
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtU1QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9wdC1TVC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0JBQWU7UUFDYixPQUFPO1FBQ1AsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekM7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNuQyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztZQUN0RTtnQkFDRSxTQUFTLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGFBQWE7Z0JBQ3hGLFFBQVE7YUFDVDtZQUNELENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1NBQ3ZFO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RDtnQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07YUFDL0Y7WUFDRDtnQkFDRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVU7Z0JBQ3hGLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVTthQUNsQztTQUNGO1FBQ0QsQ0FBQztRQUNELENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFFLDhCQUE4QixDQUFDO1FBQ2pGLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO1FBQ3BELENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUM5RCxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQztRQUM1QyxLQUFLO1FBQ0wsSUFBSTtRQUNKLDhCQUE4QjtRQUM5QjtZQUNFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztZQUNuQixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztTQUNwQjtRQUNELEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpO1xuICBpZiAoaSA9PT0gTWF0aC5mbG9vcihpKSAmJiBpID49IDAgJiYgaSA8PSAxKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ3B0LVNUJyxcbiAgW1snYS5tLicsICdwLm0uJ10sIHUsIFsnZGEgbWFuaMOjJywgJ2RhIHRhcmRlJ11dLFxuICBbWydhLm0uJywgJ3AubS4nXSwgdSwgWydtYW5ow6MnLCAndGFyZGUnXV0sXG4gIFtcbiAgICBbJ0QnLCAnUycsICdUJywgJ1EnLCAnUScsICdTJywgJ1MnXSxcbiAgICBbJ2RvbWluZ28nLCAnc2VndW5kYScsICd0ZXLDp2EnLCAncXVhcnRhJywgJ3F1aW50YScsICdzZXh0YScsICdzw6FiYWRvJ10sXG4gICAgW1xuICAgICAgJ2RvbWluZ28nLCAnc2VndW5kYS1mZWlyYScsICd0ZXLDp2EtZmVpcmEnLCAncXVhcnRhLWZlaXJhJywgJ3F1aW50YS1mZWlyYScsICdzZXh0YS1mZWlyYScsXG4gICAgICAnc8OhYmFkbydcbiAgICBdLFxuICAgIFsnZG9taW5nbycsICdzZWd1bmRhJywgJ3RlcsOnYScsICdxdWFydGEnLCAncXVpbnRhJywgJ3NleHRhJywgJ3PDoWJhZG8nXVxuICBdLFxuICB1LFxuICBbXG4gICAgWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICAgIFtcbiAgICAgICdqYW4uJywgJ2Zldi4nLCAnbWFyLicsICdhYnIuJywgJ21haS4nLCAnanVuLicsICdqdWwuJywgJ2Fnby4nLCAnc2V0LicsICdvdXQuJywgJ25vdi4nLCAnZGV6LidcbiAgICBdLFxuICAgIFtcbiAgICAgICdqYW5laXJvJywgJ2ZldmVyZWlybycsICdtYXLDp28nLCAnYWJyaWwnLCAnbWFpbycsICdqdW5obycsICdqdWxobycsICdhZ29zdG8nLCAnc2V0ZW1icm8nLFxuICAgICAgJ291dHVicm8nLCAnbm92ZW1icm8nLCAnZGV6ZW1icm8nXG4gICAgXVxuICBdLFxuICB1LFxuICBbWydhLkMuJywgJ2QuQy4nXSwgdSwgWydhbnRlcyBkZSBDcmlzdG8nLCAnZGVwb2lzIGRlIENyaXN0byddXSxcbiAgMSxcbiAgWzYsIDBdLFxuICBbJ2RkL01NL3l5JywgJ2RkL01NL3knLCAnZCBcXCdkZVxcJyBNTU1NIFxcJ2RlXFwnIHknLCAnRUVFRSwgZCBcXCdkZVxcJyBNTU1NIFxcJ2RlXFwnIHknXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0sIHswfScsIHUsICd7MX0gXFwnw6BzXFwnIHswfScsIHVdLFxuICBbJywnLCAnwqAnLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSxcbiAgJ1NUTicsXG4gICdEYicsXG4gICdkb2JyYSBkZSBTw6NvIFRvbcOpIGUgUHLDrW5jaXBlJyxcbiAge1xuICAgICdBVUQnOiBbJ0FVJCcsICckJ10sXG4gICAgJ0pQWSc6IFsnSlDCpScsICfCpSddLFxuICAgICdQVEUnOiBbJ+KAiyddLFxuICAgICdST04nOiBbdSwgJ0wnXSxcbiAgICAnU1ROJzogWydEYiddLFxuICAgICdUSEInOiBbJ+C4vyddLFxuICAgICdUV0QnOiBbJ05UJCddLFxuICAgICdVU0QnOiBbJ1VTJCcsICckJ11cbiAgfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==