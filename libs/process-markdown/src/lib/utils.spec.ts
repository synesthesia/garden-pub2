
import { getSimplifiedSlug } from './utils';

describe('processMarkdown', () => {
  describe('getSimplifiedSlug', () => {
    it('should work', () => {
      expect(getSimplifiedSlug("first second")).toEqual('first-second');
    });
  })

});


