import { screen } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GridContent />', () => {
  it('should render', () => {
    renderTheme(<GridContent>Children</GridContent>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
