import { useContext, useEffect, useState } from 'react';
import { MapPin, ShoppingCart, X } from 'phosphor-react';

import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext';

import logoImg from '../../assets/logo.svg';

import {
  ShoppingCartButtonNavBar,
  NavBarContainer,
  CurrentCityFound,
  CurrentCityNotFound,
} from './styles';
import { NavLink } from 'react-router-dom';

export function NavBar() {
  const { coffees } = useContext(CoffeeOrderContext);
  const [amountItemsInShoppingCart, setAmountItemsInShoppingCart] = useState(0);
  const [currentCity, setCurrentCity] = useState('Maringá, PR');

  function showPosition(position: any) {
    console.log(
      `Latitude: " ${position.coords.latitude} | Longitude: " + ${position.coords.longitude}`
    );
  }

  function getLatLong() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  useEffect(() => {
    setAmountItemsInShoppingCart(0);
    coffees.forEach((coffee) => {
      setAmountItemsInShoppingCart((state) => (state += coffee.amount));
    });
  }, [coffees]);

  return (
    <NavBarContainer>
      <NavLink to='/' title='Home'>
        <img src={logoImg} alt='Ir para a página inicial' />
      </NavLink>
      <div>
        {/** Pedir permissão para pegar a localização do usuário.
         * Se permitido, colocar a cidade
         * Se negado, falar que não foi possível encontrar
         */}
        {currentCity !== '' ? (
          <CurrentCityFound onClick={getLatLong}>
            <MapPin weight='fill' /> {currentCity}
          </CurrentCityFound>
        ) : (
          <CurrentCityNotFound onClick={getLatLong}>
            <X weight='fill' /> Cidade não encontrada
          </CurrentCityNotFound>
        )}
        <ShoppingCartButtonNavBar to='/checkout' title='Carrinho'>
          <ShoppingCart weight='fill' />
          {amountItemsInShoppingCart > 0 && (
            <span>{amountItemsInShoppingCart}</span>
          )}
        </ShoppingCartButtonNavBar>
      </div>
    </NavBarContainer>
  );
}
