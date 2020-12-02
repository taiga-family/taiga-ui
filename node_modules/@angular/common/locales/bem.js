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
        define("@angular/common/locales/bem", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'bem',
        [['uluchelo', 'akasuba'], u, u],
        u,
        [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            [
                'Pa Mulungu', 'Palichimo', 'Palichibuli', 'Palichitatu', 'Palichine', 'Palichisano',
                'Pachibelushi'
            ],
            u, u
        ],
        u,
        [
            ['J', 'F', 'M', 'E', 'M', 'J', 'J', 'O', 'S', 'O', 'N', 'D'],
            ['Jan', 'Feb', 'Mac', 'Epr', 'Mei', 'Jun', 'Jul', 'Oga', 'Sep', 'Okt', 'Nov', 'Dis'],
            [
                'Januari', 'Februari', 'Machi', 'Epreo', 'Mei', 'Juni', 'Julai', 'Ogasti', 'Septemba',
                'Oktoba', 'Novemba', 'Disemba'
            ]
        ],
        u,
        [['BC', 'AD'], u, ['Before Yesu', 'After Yesu']],
        1,
        [6, 0],
        ['dd/MM/y', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1} {0}', u, u, u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'],
        'ZMW',
        'K',
        'ZMW',
        { 'JPY': ['JP¥', '¥'], 'USD': ['US$', '$'], 'ZMW': ['K', 'ZK'] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2xvY2FsZXMvYmVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUNBQXlDO0lBQ3pDLCtDQUErQztJQUUvQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0JBQWU7UUFDYixLQUFLO1FBQ0wsQ0FBQyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFDRDtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25DO2dCQUNFLFlBQVksRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsYUFBYTtnQkFDbkYsY0FBYzthQUNmO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUNELENBQUM7UUFDRDtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDNUQsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUNwRjtnQkFDRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVU7Z0JBQ3JGLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUzthQUMvQjtTQUNGO1FBQ0QsQ0FBQztRQUNELENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDTixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixDQUFDO1FBQ3BELENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7UUFDeEQsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUM5RCxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQztRQUMzQyxLQUFLO1FBQ0wsR0FBRztRQUNILEtBQUs7UUFDTCxFQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFDO1FBQzlELEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAobiA9PT0gMSkgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdiZW0nLFxuICBbWyd1bHVjaGVsbycsICdha2FzdWJhJ10sIHUsIHVdLFxuICB1LFxuICBbXG4gICAgWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gICAgW1xuICAgICAgJ1BhIE11bHVuZ3UnLCAnUGFsaWNoaW1vJywgJ1BhbGljaGlidWxpJywgJ1BhbGljaGl0YXR1JywgJ1BhbGljaGluZScsICdQYWxpY2hpc2FubycsXG4gICAgICAnUGFjaGliZWx1c2hpJ1xuICAgIF0sXG4gICAgdSwgdVxuICBdLFxuICB1LFxuICBbXG4gICAgWydKJywgJ0YnLCAnTScsICdFJywgJ00nLCAnSicsICdKJywgJ08nLCAnUycsICdPJywgJ04nLCAnRCddLFxuICAgIFsnSmFuJywgJ0ZlYicsICdNYWMnLCAnRXByJywgJ01laScsICdKdW4nLCAnSnVsJywgJ09nYScsICdTZXAnLCAnT2t0JywgJ05vdicsICdEaXMnXSxcbiAgICBbXG4gICAgICAnSmFudWFyaScsICdGZWJydWFyaScsICdNYWNoaScsICdFcHJlbycsICdNZWknLCAnSnVuaScsICdKdWxhaScsICdPZ2FzdGknLCAnU2VwdGVtYmEnLFxuICAgICAgJ09rdG9iYScsICdOb3ZlbWJhJywgJ0Rpc2VtYmEnXG4gICAgXVxuICBdLFxuICB1LFxuICBbWydCQycsICdBRCddLCB1LCBbJ0JlZm9yZSBZZXN1JywgJ0FmdGVyIFllc3UnXV0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkZC9NTS95JywgJ2QgTU1NIHknLCAnZCBNTU1NIHknLCAnRUVFRSwgZCBNTU1NIHknXSxcbiAgWydoOm1tIGEnLCAnaDptbTpzcyBhJywgJ2g6bW06c3MgYSB6JywgJ2g6bW06c3MgYSB6enp6J10sXG4gIFsnezF9IHswfScsIHUsIHUsIHVdLFxuICBbJy4nLCAnLCcsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnwqQjLCMjMC4wMCcsICcjRTAnXSxcbiAgJ1pNVycsXG4gICdLJyxcbiAgJ1pNVycsXG4gIHsnSlBZJzogWydKUMKlJywgJ8KlJ10sICdVU0QnOiBbJ1VTJCcsICckJ10sICdaTVcnOiBbJ0snLCAnWksnXX0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=