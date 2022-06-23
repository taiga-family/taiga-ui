import {DEMO_WRAPPERS, makeDemoIt} from '../../support/demo-paths';

describe('Demo/wrappers', () => DEMO_WRAPPERS.forEach(url => makeDemoIt(url)));
