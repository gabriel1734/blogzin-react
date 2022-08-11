import * as Styled from './styles';
import P from 'prop-types';
import { Heading } from '../Heading';

export const LogoLink = ({ text, srcImage = '', link }) => {
  return (
    <Heading size="small" uppercase={true}>
      <Styled.Container href={link} target="_self">
        {srcImage ? <img src={srcImage} alt={text} /> : <span>{text}</span>}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImage: P.string,
  link: P.string.isRequired,
};
