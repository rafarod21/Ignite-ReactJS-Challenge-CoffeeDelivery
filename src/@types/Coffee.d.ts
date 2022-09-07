export type TagsType = "tradicional" | "especial" | "com leite" | "alcoólico" | "gelado";

export type CoffeeType = {
  name: string;
  description: string;
  tags: TagsTypes[];
  value: string;
  image: string;
}