import { useState } from "react";
import { MapPin, ShoppingCart, X } from "phosphor-react";

import logoImg from "../../assets/logo.svg";

import {
  ShoppingCartButtonNavBar,
  NavBarContainer,
  CurrentCityFound,
  CurrentCityNotFound
} from "./styles";
import { NavLink } from "react-router-dom";

export function NavBar() {
  const [currentCity, setCurrentCity] = useState("Maringá, PR");

  function showPosition(position: any) {
    console.log(
      `Latitude: " ${position.coords.latitude} | Longitude: " + ${position.coords.longitude}`
    );
  }

  function getLatLong() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  return (
    <NavBarContainer>
      <NavLink to="/" title="Home">
        <img src={logoImg} alt="Ir para a página inicial" />
      </NavLink>
      <div>
        {/** Pedir permissão para pegar a localização do usuário.
         * Se permitido, colocar a cidade
         * Se negado, falar que não foi possível encontrar
         */}
        {currentCity !== "" ? (
          <CurrentCityFound onClick={getLatLong}>
            <MapPin weight="fill" /> {currentCity}
          </CurrentCityFound>
        ) : (
          <CurrentCityNotFound onClick={getLatLong}>
            <X weight="fill" /> Cidade não encontrada
          </CurrentCityNotFound>
        )}
        <ShoppingCartButtonNavBar to="/checkout" title="Carrinho">
          <ShoppingCart weight="fill" />
          <span>3</span>
        </ShoppingCartButtonNavBar>
      </div>
    </NavBarContainer>
  );
}
