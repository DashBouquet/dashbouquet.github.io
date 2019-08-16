// Lib
import React from 'react';
import { css } from 'glamor';

// Components
import Image from 'components/Image';
import Button from 'components/Button';

// Typography
import Text from 'components/UI/Text';

// Theme
import { Spacing, Restrictions } from 'UI/Variables';

// Should support ie9+
const styles = {
  slide: {
    marginBottom: Spacing.xs,
    textAlign: 'left',
  },
  info: { verticalAlign: 'middle' },
};

interface SlideProps {
  slide: object;
  onClick?: VoidFunction;
}

const Slide: React.FC<SlideProps> = ({ slide, onClick }): JSX.Element => (
  <>
    <div {...css(styles.slide)}>
      <table width="100%">
        <tbody>
        <tr>
          <td {...css(styles.info)}>
            <Text tag="div" style="title--sm">
              {slide.title}
            </Text>
            <Text tag="div">{slide.tagline}</Text>
          </td>
          <td width={Restrictions.ui.slideImageSize}>
            <Image image={slide.img} size="tiny" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <Button data-id={slide.id} onClick={onClick} small={true} style="outline">
      Show me more!
    </Button>
  </>
);

export default Slide;
