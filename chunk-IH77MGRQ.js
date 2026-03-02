import"./chunk-HU6DUUP4.js";var o=`import {DatePipe, DecimalPipe, isPlatformServer} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    PLATFORM_ID,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TuiDemo} from '@demo/utils';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiButton} from '@taiga-ui/core';
import {TuiBadge, TuiChevron} from '@taiga-ui/kit';
import {
    catchError,
    distinctUntilChanged,
    from,
    map,
    of,
    shareReplay,
    switchMap,
} from 'rxjs';

interface ApiResponse<T> {
    browsers: Array<{
        coverage: number;
        id: string;
        name: string;
        versions: T;
    }>;
    config: string;
    coverage: number;
    updated: number;
    versions: {
        browserslist: string;
        caniuse: string;
    };
}

interface VersionItem {
    version: string;
    coverage: number;
}

function versionPriority(version: string): number {
    return Number(version.includes('-') ? version.split('-')[1] : version);
}

interface BrowserRow {
    id: string;
    name: string;
    coverage: number;
    minVersion: string;
    children: VersionItem[];
}

type MinByConfig = Record<string, string>;

function parseMinByConfig(config: string): MinByConfig {
    return config
        .split(',')
        .map((x) => x.trim())
        .reduce<MinByConfig>((acc, part) => {
            const match = /^(\\S(?:.*\\S)?)\\s*>=\\s*(\\S(?:.*\\S)?)$/.exec(part);

            if (!match) {
                return acc;
            }

            const key = match[1]?.trim() ?? '';
            const min = match[2]?.trim() ?? '';

            acc[key] = \`\${min}+\`;

            return acc;
        }, {});
}

const CONFIG_KEY_BY_BROWSER_ID: Record<string, string> = {
    and_chr: 'ChromeAndroid',
    chrome: 'Chrome',
    edge: 'Edge',
    opera: 'Opera',
    op_mob: 'OperaMobile',
    samsung: 'Samsung',
    firefox: 'Firefox',
    and_ff: 'FirefoxAndroid',
    safari: 'Safari',
    ios_saf: 'iOS',
};

@Component({
    imports: [DatePipe, DecimalPipe, TuiBadge, TuiButton, TuiChevron, TuiDemo, TuiTable],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    private readonly isServer = isPlatformServer(inject(PLATFORM_ID));
    private readonly http = inject(HttpClient);

    private readonly config$ = from(import('@taiga-ui/browserslist-config')).pipe(
        map((module) => module.default.modern),
        map((config) => encodeURIComponent(String(config))),
        distinctUntilChanged(),
        shareReplay({bufferSize: 1, refCount: true}),
    );

    private readonly response$ = this.config$.pipe(
        switchMap((config) =>
            this.isServer
                ? of(null)
                : this.http.get<ApiResponse<Record<string, number>>>(
                      \`https://browsersl.ist/api/browsers?q=\${config}\`,
                  ),
        ),
        map(
            (
                response: ApiResponse<Record<string, number>> | null,
            ): ApiResponse<VersionItem[]> | null =>
                response
                    ? {
                          ...response,
                          browsers: response.browsers.map((browser) => ({
                              ...browser,
                              versions: Object.entries(browser.versions)
                                  .map(([version, coverage]) => ({
                                      version,
                                      coverage,
                                  }))
                                  .sort(
                                      (a, b) =>
                                          versionPriority(b.version) -
                                          versionPriority(a.version),
                                  ),
                          })),
                      }
                    : null,
        ),
        shareReplay({bufferSize: 1, refCount: true}),
        catchError(() => of(null as ApiResponse<VersionItem[]> | null)),
    );

    protected readonly response = toSignal(this.response$, {initialValue: null});

    protected readonly columns = ['toggle', 'browser', 'min', 'total'] as const;

    protected readonly rowState: Record<string, boolean> = {};

    protected readonly data = computed<BrowserRow[]>(() => {
        const response = this.response();
        const browsers = response?.browsers ?? [];
        const minByConfig = parseMinByConfig(response?.config ?? '');

        return browsers.map((browser) => {
            const children = browser.versions; // \u0443 \u0442\u0435\u0431\u044F \u0443\u0436\u0435 VersionItem[] (\u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435)
            const fallbackMin = children[children.length - 1]?.version ?? '';
            const fallbackLabel = fallbackMin ? \`\${fallbackMin}+\` : '';
            const configKey = CONFIG_KEY_BY_BROWSER_ID[browser.id];
            const minVersion = (configKey && minByConfig[configKey]) || fallbackLabel;

            return {
                id: browser.id,
                name: browser.name,
                coverage: browser.coverage,
                minVersion,
                children,
            };
        });
    });

    protected toggleRow(id: string): void {
        this.rowState[id] = !this.rowState[id];
    }
}
`;export{o as default};
