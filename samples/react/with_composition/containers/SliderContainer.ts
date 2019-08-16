// Lib
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

// Component
import Slider from '../components/Slider';

// Actions
import { showSlideDetailedView } from '../actions';

// Selectors
import { getSlidesVariants } from '../selectors';

const mapStateToProps = state => ({
  slides: getSlidesVariants(state),
});

const mapDispatchToProps = dispatch => ({
  onSlideClick: ({ event: Event }) => {
    const { currentTarget } = event;
    dispatch(showSlideDetailedView(currentTarget.dataset.id));
  },
});

const CYCLE_BASIC_POSITION = 0;
const CYCLE_OFFSET = 1;

const SliderContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('position', 'onPositionChange', CYCLE_BASIC_POSITION),
  withHandlers({
    onIncrease: ({ slides, position, onPositionChange }) => () => (
      onPositionChange((position + CYCLE_OFFSET) % slides.length)
    ),
    onDecrease: ({ slides, position, onPositionChange }) => () => (
      onPositionChange((position - CYCLE_OFFSET + slides.length) % slides.length)
    ),
  })
)(Slider);

export default SliderContainer;
