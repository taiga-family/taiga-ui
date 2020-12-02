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
        define("@angular/common/locales/lag", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n));
        if (n === 0)
            return 0;
        if ((i === 0 || i === 1) && !(n === 0))
            return 1;
        return 5;
    }
    exports.default = [
        'lag',
        [['TOO', 'MUU'], u, u],
        u,
        [
            ['P', 'T', 'E', 'O', 'A', 'I', 'M'],
            ['Píili', 'Táatu', 'Íne', 'Táano', 'Alh', 'Ijm', 'Móosi'],
            ['Jumapíiri', 'Jumatátu', 'Jumaíne', 'Jumatáano', 'Alamíisi', 'Ijumáa', 'Jumamóosi'],
            ['Píili', 'Táatu', 'Íne', 'Táano', 'Alh', 'Ijm', 'Móosi']
        ],
        u,
        [
            ['F', 'N', 'K', 'I', 'I', 'I', 'M', 'V', 'S', 'I', 'S', 'S'],
            [
                'Fúngatɨ', 'Naanɨ', 'Keenda', 'Ikúmi', 'Inyambala', 'Idwaata', 'Mʉʉnchɨ', 'Vɨɨrɨ',
                'Saatʉ', 'Inyi', 'Saano', 'Sasatʉ'
            ],
            [
                'Kʉfúngatɨ', 'Kʉnaanɨ', 'Kʉkeenda', 'Kwiikumi', 'Kwiinyambála', 'Kwiidwaata',
                'Kʉmʉʉnchɨ', 'Kʉvɨɨrɨ', 'Kʉsaatʉ', 'Kwiinyi', 'Kʉsaano', 'Kʉsasatʉ'
            ]
        ],
        u,
        [['KSA', 'KA'], u, ['Kɨrɨsitʉ sɨ anavyaal', 'Kɨrɨsitʉ akavyaalwe']],
        1,
        [6, 0],
        ['dd/MM/y', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', u, u, u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'],
        'TZS',
        'TSh',
        'Shilíingi ya Taansanía',
        { 'JPY': ['JP¥', '¥'], 'TZS': ['TSh'], 'USD': ['US$', '$'] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2xvY2FsZXMvbGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUNBQXlDO0lBQ3pDLCtDQUErQztJQUUvQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0JBQWU7UUFDYixLQUFLO1FBQ0wsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFDRDtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25DLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQ3pELENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDO1lBQ3BGLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDO1NBQzFEO1FBQ0QsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RDtnQkFDRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTztnQkFDakYsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUTthQUNuQztZQUNEO2dCQUNFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsWUFBWTtnQkFDNUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVO2FBQ3BFO1NBQ0Y7UUFDRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDTixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixDQUFDO1FBQ3BELENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO1FBQ3BELENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFDNUMsS0FBSztRQUNMLEtBQUs7UUFDTCx3QkFBd0I7UUFDeEIsRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBQzFELEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpO1xuICBpZiAobiA9PT0gMCkgcmV0dXJuIDA7XG4gIGlmICgoaSA9PT0gMCB8fCBpID09PSAxKSAmJiAhKG4gPT09IDApKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2xhZycsXG4gIFtbJ1RPTycsICdNVVUnXSwgdSwgdV0sXG4gIHUsXG4gIFtcbiAgICBbJ1AnLCAnVCcsICdFJywgJ08nLCAnQScsICdJJywgJ00nXSxcbiAgICBbJ1DDrWlsaScsICdUw6FhdHUnLCAnw41uZScsICdUw6Fhbm8nLCAnQWxoJywgJ0lqbScsICdNw7Nvc2knXSxcbiAgICBbJ0p1bWFww61pcmknLCAnSnVtYXTDoXR1JywgJ0p1bWHDrW5lJywgJ0p1bWF0w6Fhbm8nLCAnQWxhbcOtaXNpJywgJ0lqdW3DoWEnLCAnSnVtYW3Ds29zaSddLFxuICAgIFsnUMOtaWxpJywgJ1TDoWF0dScsICfDjW5lJywgJ1TDoWFubycsICdBbGgnLCAnSWptJywgJ03Ds29zaSddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ0YnLCAnTicsICdLJywgJ0knLCAnSScsICdJJywgJ00nLCAnVicsICdTJywgJ0knLCAnUycsICdTJ10sXG4gICAgW1xuICAgICAgJ0bDum5nYXTJqCcsICdOYWFuyagnLCAnS2VlbmRhJywgJ0lrw7ptaScsICdJbnlhbWJhbGEnLCAnSWR3YWF0YScsICdNyonKiW5jaMmoJywgJ1bJqMmocsmoJyxcbiAgICAgICdTYWF0yoknLCAnSW55aScsICdTYWFubycsICdTYXNhdMqJJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0vKiWbDum5nYXTJqCcsICdLyoluYWFuyagnLCAnS8qJa2VlbmRhJywgJ0t3aWlrdW1pJywgJ0t3aWlueWFtYsOhbGEnLCAnS3dpaWR3YWF0YScsXG4gICAgICAnS8qJbcqJyoluY2jJqCcsICdLyol2yajJqHLJqCcsICdLyolzYWF0yoknLCAnS3dpaW55aScsICdLyolzYWFubycsICdLyolzYXNhdMqJJ1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1snS1NBJywgJ0tBJ10sIHUsIFsnS8mocsmoc2l0yokgc8moIGFuYXZ5YWFsJywgJ0vJqHLJqHNpdMqJIGFrYXZ5YWFsd2UnXV0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkZC9NTS95JywgJ2QgTU1NIHknLCAnZCBNTU1NIHknLCAnRUVFRSwgZCBNTU1NIHknXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0gezB9JywgdSwgdSwgdV0sXG4gIFsnLicsICcsJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwJScsICfCpMKgIywjIzAuMDAnLCAnI0UwJ10sXG4gICdUWlMnLFxuICAnVFNoJyxcbiAgJ1NoaWzDrWluZ2kgeWEgVGFhbnNhbsOtYScsXG4gIHsnSlBZJzogWydKUMKlJywgJ8KlJ10sICdUWlMnOiBbJ1RTaCddLCAnVVNEJzogWydVUyQnLCAnJCddfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==