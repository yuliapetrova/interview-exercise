import { remote } from 'webdriverio'
import { RemoteOptions } from '@wdio/sync'

// @ts-ignore
import { launcher as wmLauncher } from 'wdio-wiremock-service'
// @ts-ignore
import { launcher } from 'wdio-chromedriver-service'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


const CHROMEDRIVER_PORT = 4444
const WDIO_OPTIONS = {
  port: CHROMEDRIVER_PORT,
  path: '/',
  capabilities: {
    browserName: 'chrome'
  },
  waitforTimeout: 10000,
  logLevel: 'silent'
} as RemoteOptions

beforeAll(async () => {
  require('expect-webdriverio')
  global.chromedriverLauncher = new launcher()
  await global.chromedriverLauncher.onPrepare(WDIO_OPTIONS)
  global.browser = await remote(WDIO_OPTIONS)
})
