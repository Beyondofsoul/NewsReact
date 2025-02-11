import { CategoriesType } from '@/entities/category';

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}
export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';

export type ParamsType = Partial<IFilters>;
