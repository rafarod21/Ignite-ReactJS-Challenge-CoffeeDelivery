import { useContext, useEffect } from 'react';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext';

import illustrationImg from '../../assets/Illustration.svg';

import {
  InformationsBlock,
  Item1,
  Item2,
  Item3,
  SuccessContainer,
} from './styles';

export function Success() {
  const { coffees, address, payment, removeCoffee } =
    useContext(CoffeeOrderContext);

  useEffect(() => {
    coffees.forEach((coffee) => {
      removeCoffee(coffee);
    });
  }, []);

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <div>
          <InformationsBlock>
            <Item1>
              <div>
                <MapPin weight='fill' />
              </div>{' '}
              <span>
                Entrega em{' '}
                <strong>{`${address.street}, ${address.number}${
                  address.complement.length > 0 && `, ${address.complement}`
                }`}</strong>{' '}
                <br />
                {`${address.district} - ${address.city}, ${address.uf}`}
              </span>
            </Item1>
            <Item2>
              <div>
                <Timer weight='fill' />
              </div>{' '}
              <span>
                Previsão de entrega <br />
                <strong>20 min - 30 min</strong>
              </span>
            </Item2>
            <Item3>
              <div>
                <CurrencyDollar weight='fill' />
              </div>{' '}
              <span>
                Pagamento na entrega <br />
                {payment === 'credit' && <strong>Cartão de Crédito</strong>}
                {payment === 'debit' && <strong>Cartão de Débito</strong>}
                {payment === 'money' && <strong>Dinheiro</strong>}
                {payment === 'pix' && <strong>PIX</strong>}
              </span>
            </Item3>
          </InformationsBlock>
        </div>
      </div>

      <img src={illustrationImg} alt='' />
    </SuccessContainer>
  );
}
