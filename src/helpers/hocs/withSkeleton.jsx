import Skeleton from '../../components/Skeleton/Skeleton';

function withSkeleton(Component, type, count, direction) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }
    return <Component {...restProps} direction={direction} />;
  };
}
export default withSkeleton;
