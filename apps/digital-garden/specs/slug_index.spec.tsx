import { render } from '@testing-library/react';

import Slug from '../pages/[slug]';

describe('Slug', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Slug slug={'test'} />);
    expect(baseElement).toBeTruthy();
  });
});
