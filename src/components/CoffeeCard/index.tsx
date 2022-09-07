import { ShoppingCart } from "phosphor-react";

import { CoffeesAmountInput } from "../CoffeesAmountInput";

import {
  CoffeeCardContainer,
  TagsContainer,
  CardFooter,
  ShoppingCartButton
} from "./styles";

interface CoffeeCardProps {
  name: string;
  description: string;
  tags: ("tradicional" | "especial" | "com leite" | "alcoólico" | "gelado")[];
  value: string;
  image: string;
}

export function CoffeeCard({
  name,
  description,
  tags,
  value,
  image
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={image} alt="Expresso Tradicional" />
      <TagsContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>
      <h4>{name}</h4>
      <span>{description}</span>
      <CardFooter>
        <span>
          R$ <strong>{value}</strong>
        </span>
        <div>
          <CoffeesAmountInput />
          <ShoppingCartButton>
            <ShoppingCart weight="fill" />
          </ShoppingCartButton>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
