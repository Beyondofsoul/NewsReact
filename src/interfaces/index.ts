export interface INews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string | number | null;
  url: string;
}
export interface PaginationProps {
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handlePageClick: (Page: number) => void;
  currentPage: number;
}
export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}
export interface CategoriesApiResponse {
  categories: CategoriesType[];
  description: string;
  status: string;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}
export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';

export type ParamsType = Partial<IFilters>;

export type CategoriesType = string;
