import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  QrCode,
} from 'phosphor-react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext';

import { CoffeeCardCheckout } from '../../components/CoffeeCardCheckout';

import { Payments } from '../../@types/Payments';

import { formatValueInCurrentCoin } from '../../utils/formatValueInCurrentCoin';

import {
  Address,
  ButtonOptionsPayments,
  CheckoutContainer,
  LabelAddress,
  LabelPayment,
  ListCoffees,
  OptionsPayments,
  Payment,
  SectionValues,
  SelctedCoffees,
} from './styles';

const DELIVERY_FEE = 3.5;

export function Checkout() {
  const navigate = useNavigate();
  const {
    coffees,
    totalMoney,
    address,
    changeAddress,
    payment,
    changePayment,
  } = useContext(CoffeeOrderContext);
  const [paymentSelected, setPaymentSelected] = useState<Payments>(payment);

  function handleChangePayment(payment: Payments) {
    setPaymentSelected(payment);
    changePayment(payment);
  }

  function handleSubmitForm(event: any) {
    navigate('/success');
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmitForm}>
        <div>
          <h2>Complete seu pedido</h2>
          <Address>
            <LabelAddress>
              <MapPinLine />
              <div>
                <span>Endereço de Entrega</span>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </LabelAddress>
            <input type='text' placeholder='CEP' />
            <input type='text' placeholder='Rua' />
            <input type='text' placeholder='Número' />
            <div data-after='Opicional'>
              <input type='text' placeholder='Complemento' />
            </div>
            <input type='text' placeholder='Bairro' />
            <input type='text' placeholder='Cidade' />
            <input type='text' placeholder='UF' />
          </Address>
          <Payment>
            <LabelPayment>
              <CurrencyDollar />
              <div>
                <span>Pagamento</span>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </LabelPayment>

            <OptionsPayments>
              <ButtonOptionsPayments
                type='button'
                isSelected={paymentSelected === 'credit'}
                onClick={() => handleChangePayment('credit')}
              >
                <CreditCard /> CARTÃO DE CRÉDITO
              </ButtonOptionsPayments>
              <ButtonOptionsPayments
                type='button'
                isSelected={paymentSelected === 'debit'}
                onClick={() => handleChangePayment('debit')}
              >
                <Bank /> CARTÃO DE DÉBITO
              </ButtonOptionsPayments>
              <ButtonOptionsPayments
                type='button'
                isSelected={paymentSelected === 'money'}
                onClick={() => handleChangePayment('money')}
              >
                <Money /> DINHEIRO
              </ButtonOptionsPayments>
              <ButtonOptionsPayments
                type='button'
                isSelected={paymentSelected === 'pix'}
                onClick={() => handleChangePayment('pix')}
              >
                <QrCode /> PIX
              </ButtonOptionsPayments>
            </OptionsPayments>
          </Payment>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <SelctedCoffees>
            {coffees.length <= 0 ? (
              <span>
                {'Você ainda não escolheu nenhum café :('}
                <br />
                <br />
                {'Volte para a página inicial e escolha alguns =D'}{' '}
              </span>
            ) : (
              <>
                <ListCoffees>
                  {coffees.map((coffee) => (
                    <>
                      <CoffeeCardCheckout key={coffee.name} coffee={coffee} />
                      <hr />
                    </>
                  ))}
                </ListCoffees>
                <SectionValues>
                  <div>
                    <span>Total de itens</span>
                    <span>{formatValueInCurrentCoin(totalMoney)}</span>
                  </div>
                  <div>
                    <span>{'Entrega (fixa)'}</span>
                    <span>{formatValueInCurrentCoin(DELIVERY_FEE)}</span>
                  </div>
                  <div>
                    <strong>Total</strong>
                    <strong>
                      {formatValueInCurrentCoin(totalMoney + DELIVERY_FEE)}
                    </strong>
                  </div>
                </SectionValues>
                <button type='submit'>CONFIRMAR PEDIDO</button>
              </>
            )}
          </SelctedCoffees>
        </div>
      </form>
    </CheckoutContainer>
  );
}
