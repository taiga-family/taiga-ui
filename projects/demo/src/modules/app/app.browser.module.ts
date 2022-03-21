import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDocMainModule} from '@taiga-ui/addon-doc';
import {
    TuiMobileDialogModule,
    TuiSheetModule,
    TuiThemeAndroidModule,
    TuiThemeIosModule,
} from '@taiga-ui/addon-mobile';
import {TuiPreviewModule} from '@taiga-ui/addon-preview';
import {TuiTableBarsHostModule} from '@taiga-ui/addon-tablebars';
import {TuiDialogModule, TuiLinkModule, TuiModeModule} from '@taiga-ui/core';
import {TuiPdfViewerModule} from '@taiga-ui/kit';
import {MetrikaModule} from 'ng-yandex-metrika';
import {MarkdownModule} from 'ngx-markdown';

import {environment} from '../../environments/environment';
import {CustomHostModule} from '../customization/portals/examples/1/portal/сustom-host.module';
import {AppComponent} from './app.component';
import {APP_PROVIDERS} from './app.providers';
import {AppRoutingModule} from './app.routes';
import {GettingStartedModule} from './getting-started/getting-started.module';
import {HomeModule} from './home/home.module';
import {LandingModule} from './landing/landing.module';
import {LogoModule} from './logo/logo.module';
import {VersionManagerModule} from './version-manager/version-manager.module';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({appId: 'tui-demo'}),
        // PrebootModule.withConfig({appRoot: 'app'}),
        AppRoutingModule,
        BrowserAnimationsModule,
        TuiDocMainModule,
        TuiTableBarsHostModule,
        TuiThemeAndroidModule,
        TuiThemeIosModule,
        TuiDialogModule,
        TuiPreviewModule,
        TuiPdfViewerModule,
        TuiSheetModule,
        TuiMobileDialogModule,
        TuiModeModule,
        TuiLinkModule,
        GettingStartedModule,
        HomeModule,
        LandingModule,
        LogoModule,
        VersionManagerModule,
        CustomHostModule,
        HttpClientModule,
        MetrikaModule.forRoot({id: environment.ym, webvisor: false, clickmap: false}),
        MarkdownModule.forRoot({
            loader: HttpClient,
        }),
    ],
    declarations: [AppComponent],
    providers: APP_PROVIDERS,
})
export class AppBrowserModule {}
