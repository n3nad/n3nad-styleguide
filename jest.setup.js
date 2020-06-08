/**
 * All objects, mocks and other stuff needed during tests
 *
 * In this file we can put any code that we need in testing environment
 *
 */

// Configure Enzyme library
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const jQuery = {};
const localStorage = {
  setItem: jest.fn(),
  getItem: jest.fn()
};

global.jQuery = jQuery;
global.localStorage = localStorage;
global.SITE_ROOT = null;
global.wait = delay => new Promise(resolve => setTimeout(resolve, delay));
