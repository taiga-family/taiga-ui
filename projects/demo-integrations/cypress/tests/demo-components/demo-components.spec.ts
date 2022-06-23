import {DEMO_COMPONENTS, makeDemoIt} from '../../support/demo-paths';

describe('Demo/components', () => DEMO_COMPONENTS.forEach(url => makeDemoIt(url)));
