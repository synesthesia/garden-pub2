import { render } from '@testing-library/react';

import NoteColumnsContainer from './note-columns-container';

describe('NoteColumnsContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NoteColumnsContainer />);
    expect(baseElement).toBeTruthy();
  });
});
