// Lib
import React from 'react';
import styled from 'styled-components';

// Hooks
import useSlider from 'hooks/useSlider';

// Components
import Image from 'components/Image';
import Button from 'components/Button';

// Typography
import Text from 'components/UI/Text';

// Theme
import { Spacing, Restrictions } from 'UI/Variables';

// Should support ie9+
const Styles = {
  slide: styled.div`
    margin-bottom: ${Spacing.xs};
    text-align: left;
  `,
  info: styled.td`
    vertical-align: middle;
  `,
};

interface SlideProps {
  slide: object;
}

const Slide: React.FC<SlideProps> = ({ slide }): JSX.Element => {
  const { onSlideClick } = useSlider();

  return (
    <>
      <Styles.slide>
        <table width="100%">
          <tbody>
          <tr>
            <Styles.info>
              <Text tag="div" style="title--sm">
                {slide.title}
              </Text>
              <Text tag="div">{slide.tagline}</Text>
            </Styles.info>
            <td width={Restrictions.ui.slideImageSize}>
              <Image image={slide.img} size="tiny" />
            </td>
          </tr>
          </tbody>
        </table>
      </Styles.slide>
      <Button data-id={slide.id} onClick={onSlideClick} small={true} style="outline">
        Show me more!
      </Button>
    </>
  );
};

export default Slide;
