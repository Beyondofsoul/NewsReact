import { DirectionType, SkeletonType } from '../interfaces';
import Skeleton from '../ui/Skeleton/Skeleton';

interface Props {
  isLoading: boolean;
  direction?: DirectionType;
  type?: SkeletonType;
}

function withSkeleton<P extends object>(Component: React.ComponentType<P>, count?: number) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, direction = 'column', type, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }
    return <Component type={type} {...(restProps as P)} direction={direction} />;
  };
}
export default withSkeleton;
