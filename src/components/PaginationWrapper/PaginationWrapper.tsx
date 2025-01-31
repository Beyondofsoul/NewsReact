import { ReactNode } from 'react';
import Pagination from '../Pagination/Pagination';
import { PaginationProps } from '../../interfaces';

interface Props {
  top?: boolean;
  children: ReactNode;
  bottom?: boolean;
}

function PaginationWrapper({ top, bottom, children, ...paginationProps }: Props & PaginationProps) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}

export default PaginationWrapper;
