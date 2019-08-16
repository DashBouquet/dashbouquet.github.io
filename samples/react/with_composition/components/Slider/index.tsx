// Lib
import React from 'react';
import { css } from 'glamor';

// Components
import Icon from 'components/Icon';
import Slide from './Slide';

// Theme
import { Borders, Colors, Spacing, Restrictions } from 'UI/Variables';
import { styleIcon } from 'UI/Variables/mixins';

// Should support ie9+
const styles = {
  container: {
    bottom: Spacing.lg,
    padding: `0 ${Spacing.sm}`,
    position: 'absolute',
    textAlign: 'center',
    left: 0,
    width: '100%',
  },
  arrow: {
    cursor: 'pointer',
    display: 'inline-block',
    position: 'relative',
    right: 0,
    zIndex: 0,
    verticalAlign: 'middle',
    ':hover': styleIcon(Colors.red, Colors.white),
  },
  slides: {
    background: Colors.highlight,
    borderRadius: Borders.lg,
    display: 'inline-block',
    margin: `0 ${Spacing.sm}`,
    padding: `${Spacing.sm} ${Spacing.lg} ${Spacing.md}`,
    verticalAlign: 'middle',
    width: `calc(100% - (${Restrictions.ui.iconSize} * 2 + ${Spacing.sm} * 2))`,
  },
};

interface SliderProps {
  slides: object[];
  position: number;
  onSlideClick?: VoidFunction;
  onIncrease: VoidFunction;
  onDecrease: VoidFunction;
}

const Slider: React.FC<SliderProps> = (props): JSX.Element => {
  const { slides, position, onSlideClick, onIncrease, onDecrease } = props;

  return (
    <div {...css(styles.container)}>
      {!!slides.length && <Icon styles={styles.arrow} rotate={90} onClick={onDecrease} type="arrow" />}
      <div {...css(styles.slides)}>
        {slides[position] && <Slide onClick={onSlideClick} slide={slides[position]} />}
      </div>
      {!!slides.length && <Icon styles={styles.arrow} rotate={-90} onClick={onIncrease} type="arrow" />}
    </div>
  );
};

export default Slider;
