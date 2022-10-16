import { useEffect, useState } from 'react';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import { CoffeeCard } from '../../components/CoffeeCard';

import coffeeImageImg from '../../assets/coffeeImage.png';

import { CoffeeType, TagsType } from '../../@types/Coffee';

import {
  HomeContainer,
  Item1,
  Item2,
  Item3,
  Item4,
  PresentationContainer,
  PresentationWrapper,
  GirdItems,
  CoffeesContainer,
  TagsWrapper,
  ButtonTag,
  CoffeesWrapeer,
} from './styles';

const TAGS: TagsType[] = [
  'tradicional',
  'especial',
  'com leite',
  'alcoólico',
  'gelado',
];

import coffeesData from '../../data.json';

export function Home() {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [filterCoffees, setFilterCoffees] = useState<CoffeeType[]>([]);

  function handleFilterCoffeesByTags(tag: string) {
    if (activeTags.length === 0) setActiveTags((state) => [...state, tag]);
    else {
      const tagWasFound = activeTags.findIndex((tagItem) => tagItem === tag);
      console.log(tagWasFound);

      if (tagWasFound > -1) {
        setActiveTags((state) => state.filter((stateTag) => stateTag !== tag));
      } else {
        setActiveTags((state) => [...state, tag]);
      }
    }
  }

  useEffect(() => {
    setFilterCoffees([]);
    coffeesData.forEach((coffee: CoffeeType) => {
      let hasTag = true;

      activeTags.forEach((tagItem) => {
        if (!hasTag) return;
        hasTag = coffee.tags.includes(tagItem as TagsType);
      });

      if (!hasTag) return;
      setFilterCoffees((state) => [...state, coffee]);
    });
  }, [activeTags]);

  return (
    <HomeContainer>
      <PresentationContainer>
        <PresentationWrapper>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
          <GirdItems>
            <Item1>
              <div>
                <ShoppingCart weight='fill' />
              </div>{' '}
              Compra simples e segura
            </Item1>
            <Item2>
              <div>
                <Timer weight='fill' />
              </div>{' '}
              Entrega rápida e rastreada
            </Item2>
            <Item3>
              <div>
                <Coffee weight='fill' />
              </div>{' '}
              O café chega fresquinho até você
            </Item3>
            <Item4>
              <div>
                <Package weight='fill' />
              </div>{' '}
              Embalagem mantém o café intacto
            </Item4>
          </GirdItems>
        </PresentationWrapper>
        <img src={coffeeImageImg} alt='' />
      </PresentationContainer>
      <CoffeesContainer>
        <header>
          <h2>Nossos cafés</h2>
          <TagsWrapper>
            {TAGS.map((tag) => (
              <ButtonTag
                key={tag}
                isActive={
                  activeTags.findIndex((tagItem) => tagItem === tag) === -1
                    ? false
                    : true
                }
                onClick={() => handleFilterCoffeesByTags(tag)}
              >
                {tag}
              </ButtonTag>
            ))}
          </TagsWrapper>
        </header>

        <CoffeesWrapeer>
          {activeTags.length > 0
            ? filterCoffees.map((coffee: CoffeeType) => (
                <CoffeeCard key={coffee.name} coffee={coffee} />
              ))
            : coffeesData.map((coffee: CoffeeType) => (
                <CoffeeCard key={coffee.name} coffee={coffee} />
              ))}
        </CoffeesWrapeer>
      </CoffeesContainer>
    </HomeContainer>
  );
}
