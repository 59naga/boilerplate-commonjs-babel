// dependencies
import assert from 'assert';

// target
import yourModuleName from '../src';

// specs
describe('yourModuleName', () => {
  it('spec1', async () => {
    assert.deepStrictEqual(await (yourModuleName()), { foo: null });
  });
});
