import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import {AppBrowserModule} from './app.browser.module';
import {AppComponent} from './app.component';

@NgModule({
    imports: [AppBrowserModule, ServerModule, ModuleMapLoaderModule],
    bootstrap: [AppComponent],
})
export class AppServerModule {}
