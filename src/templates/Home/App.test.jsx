import App from '.';
import { renderTheme } from '../../styles/render-theme';

describe('App', () => {
  it('should render correctly', () => {
    const { container } = renderTheme(<App />);
    expect(container).toMatchSnapshot();
  });
});
