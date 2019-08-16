// Lib
import { useState, useCallback } from 'react';
import { useSelector, useDispatch, Dispatch } from 'react-redux';

// Actions
import { showSlideDetailedView } from '../actions';

// Selectors
import { getSlidesVariants } from '../selectors';

const CYCLE_BASIC_POSITION = 0;
const CYCLE_OFFSET = 1;

interface useSliderProps {
  slides: object[];
  position: number;
  onSlideClick: VoidFunction;
  onIncrease: VoidFunction;
  onDecrease: VoidFunction;
}

const useSlider = (): useSliderProps => {
  const dispatch: Dispatch = useDispatch();
  const slides: object[] = useSelector(getSlidesVariants);
  const [position, onPositionChange] = useState(CYCLE_BASIC_POSITION);

  const onSlideClick = useCallback(
    ({ event: Event }) => {
      const { currentTarget } = event;
      dispatch(showSlideDetailedView(currentTarget.dataset.id));
    },
    [dispatch, showSlideDetailedView]
  );

  const onIncrease = onPositionChange((position + CYCLE_OFFSET) % slides.length);
  const onDecrease = onPositionChange((position - CYCLE_OFFSET + slides.length) % slides.length);

  return {
    slides,
    position,
    onSlideClick,
    onIncrease,
    onDecrease,
  };
};

export default useSlider;
