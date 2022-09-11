export type TagsType =
  | 'tradicional'
  | 'especial'
  | 'com leite'
  | 'alcoólico'
  | 'gelado';

export interface CoffeeType {
  name: string;
  description: string;
  tags: TagsTypes[];
  value: number;
  image: string;
}
