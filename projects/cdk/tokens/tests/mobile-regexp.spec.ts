import {TUI_MOBILE_REGEXP} from '../environment';

const MOBILE_USER_AGENTS = [
    // iOS (iPhone)
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',

    // Android Chrome
    'Mozilla/5.0 (Linux; Android 11; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36',
    'Mozilla/5.0 (Linux; Android 9; Mi A2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Mobile Safari/537.36',

    // Android Firefox
    'Mozilla/5.0 (Android 16; Mobile; rv:68.0) Gecko/68.0 Firefox/143.0',
    'Mozilla/5.0 (Android 16; Mobile; LG-M255; rv:143.0) Gecko/143.0 Firefox/143.0',

    // Windows Phone
    'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.14900',

    // BlackBerry
    'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+',

    'SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/3.5 NexPlayer/3.0 Profile/MIDP-2.1 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0',
];

const DESKTOP_USER_AGENTS = [
    // Windows
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0',

    // macOS
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',

    // Android tablet
    'Mozilla/5.0 (Linux; Android 10; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
    'Mozilla/5.0 (Linux; Android 11; Lenovo YT-J706X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
    'Dalvik/2.1.0 (Linux; U; Android 14; SM-P619N Build/UP1A.231005.007)',
    'Dalvik/2.1.0 (Linux; U; Android 15; 24091RPADG Build/AQ3A.240801.002)',

    // iOS (iPad)
    'Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPad16,3; CPU OS 18_3_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Tropicana_NJ/5.7.1',

    // Linux
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
];

describe('TUI_MOBILE_REGEXP', () => {
    it('should return true for known mobile User-Agent strings', () => {
        MOBILE_USER_AGENTS.forEach((ua) => {
            expect(TUI_MOBILE_REGEXP.test(ua)).toBe(true);
        });
    });

    it('should return false for known desktop User-Agent strings', () => {
        DESKTOP_USER_AGENTS.forEach((ua) => {
            expect(TUI_MOBILE_REGEXP.test(ua)).toBe(false);
        });
    });
});
