import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart, X } from 'phosphor-react';

import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext';

import { bigData } from '../../services/apiBigData';

import logoImg from '../../assets/logo.svg';

import {
  ShoppingCartButtonNavBar,
  NavBarContainer,
  CurrentCityFound,
  CurrentCityNotFound,
} from './styles';

export function NavBar() {
  const { coffees, address, changeAddress } = useContext(CoffeeOrderContext);
  const [amountItemsInShoppingCart, setAmountItemsInShoppingCart] = useState(0);
  const [currentCity, setCurrentCity] = useState('');

  async function showPosition(position: any) {
    // console.log(
    //   `Latitude: " ${position.coords.latitude} | Longitude: " + ${position.coords.longitude}`
    // );

    const { data } = await bigData.get('reverse-geocode-client', {
      params: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        localityLanguage: 'pt',
      },
    });
    // console.log(data);

    setCurrentCity(
      `${data.city} - ${data.principalSubdivisionCode.substring(3)}`
    );
  }

  function getLatLong() {
    if (currentCity !== '') return;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
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
