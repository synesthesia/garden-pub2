import { render } from '@testing-library/react';

import NoteContainer from './note-container';

describe('NoteContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NoteContainer />);
    expect(baseElement).toBeTruthy();
  });
});
