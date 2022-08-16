import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render grid content', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it('should render grid content with background undefined value', () => {
    const { container } = renderTheme(
      <GridContent background={undefined} {...mock} />,
    );
    expect(container).toMatchSnapshot();
  });
});
