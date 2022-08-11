import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render', () => {
    renderTheme(<LogoLink link="#" text="Logo" srcImage="Logo" />);
    expect(screen.getByRole('heading')).toMatchInlineSnapshot(`
      .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #0A1128;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c1 > img {
        max-height: 3rem;
      }

      .c0 {
        color: #fff;
        font-size: 2.4rem;
        text-transform: uppercase;
      }

      <h1
        class="c0"
      >
        <a
          class="c1"
          href="#"
          target="_self"
        >
          <img
            alt="Logo"
            src="Logo"
          />
        </a>
      </h1>
    `);
  });
  it('should  render text', () => {
    renderTheme(<LogoLink link="#" text="Logo" srcImage="" />);
    const heading = screen.getByRole('heading', { name: 'Logo' });
    expect(heading).toBeInTheDocument();
    expect(heading.firstChild).toHaveAttribute('href', '#');
    expect(heading.firstChild).toHaveAttribute('target', '_self');
  });
  it('should  render with an image logo', () => {
    renderTheme(<LogoLink link="#" text="Logo" srcImage="image.jpg" />);
    expect(screen.getByRole('img', { name: 'Logo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });
});
