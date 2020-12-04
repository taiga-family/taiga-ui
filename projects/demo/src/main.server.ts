/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
export {AppServerModule} from './modules/app/app.server.module';

export {renderModule, renderModuleFactory} from '@angular/platform-server';
