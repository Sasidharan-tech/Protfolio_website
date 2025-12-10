/* Use hooks for intersection observer animation */
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (options = {}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    ...options
  });

  return { ref, inView };
};

/* Usage in components:
const { ref, inView } = useScrollAnimation();

return (
  <section className={`section ${inView ? 'animate' : ''}`} ref={ref}>
    {content}
  </section>
);
*/
