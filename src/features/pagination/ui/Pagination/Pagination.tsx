import { ReactNode } from 'react';
import PaginationButtons from '../PaginationButtons/PaginationButtons';
import { PaginationProps } from '../../model/types';

interface Props {
  top?: boolean;
  children: ReactNode;
  bottom?: boolean;
}

function Pagination({ top, bottom, children, ...paginationProps }: Props & PaginationProps) {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
}

export default Pagination;
