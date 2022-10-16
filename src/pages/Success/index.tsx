import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import illustrationImg from '../../assets/Illustration.svg';

import {
  InformationsBlock,
  Item1,
  Item2,
  Item3,
  SuccessContainer,
} from './styles';

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
              </span>
            </Item3>
          </InformationsBlock>
        </div>
      </div>

      <img src={illustrationImg} alt='' />
    </SuccessContainer>
  );
}
