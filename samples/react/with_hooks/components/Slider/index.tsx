// Lib
import React from 'react';
import styled from 'styled-components';

// Hooks
import useSlider from 'hooks/useSlider';

// Components
import Icon from 'components/Icon';
import Slide from './Slide';

// Theme
import { Borders, Colors, Spacing, Restrictions } from 'UI/Variables';
import { styleIcon } from 'UI/Variables/mixins';

// Should support ie9+
const Styles = {
  container: styled.div`
    bottom: ${Spacing.lg};
    padding: 0 ${Spacing.md};
    position: absolute;
    text-align: center;
    left: 0;
    width: 100%;
  `,
  arrow: styled(Icon)`
    cursor: pointer;
    display: inline-block;
    position: relative;
    right: 0;
    z-index: 0;
    vertical-align: middle;
    :hover {
      ${styleIcon(Colors.red, Colors.white)}
    }
  `,
  slides: styled.div`
    background: ${Colors.highlight};
    border-radius: ${Borders.lg};
    display: inline-block;
    margin: 0 ${Spacing.sm};
    padding: ${Spacing.sm} ${Spacing.lg} ${Spacing.md};
    vertical-align: middle;
    width: calc(100% - (${Restrictions.ui.iconSize} * 2 + ${Spacing.sm} * 2));
  `,
};

const Slider: React.FC = (): JSX.Element => {
  const { slides, position, onIncrease, onDecrease } = useSlider();

  return (
    <Styles.container>
      {!!slides.length && <Styles.arrow rotate={90} onClick={onDecrease} type="arrow" />}
      <Styles.slides>
        {slides[position] && <Slide slide={slides[position]} />}
      </Styles.slides>
      {!!slides.length && <Styles.arrow rotate={-90} onClick={onIncrease} type="arrow" />}
    </Styles.container>
  );
};

export default Slider;
