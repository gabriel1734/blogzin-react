import Home from '.';
import { renderTheme } from '../../styles/render-theme';

describe('Home', () => {
  it('should render correctly', () => {
    renderTheme(<Home />);
  });
});
