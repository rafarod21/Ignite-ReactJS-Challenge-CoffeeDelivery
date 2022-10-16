import { useContext, useState } from 'react';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  QrCode,
} from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext';

import { CoffeeCardCheckout } from '../../components/CoffeeCardCheckout';

import { Payments } from '../../@types/Payments';
import { UF_STATES, viaCepProps } from '../../@types/ViaCep';

import { viaCep } from '../../services/apiViaCep';

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

const addressFormValidationSchema = zod.object({
  cep: zod.string().length(8, 'Informe um CEP válido'),
  street: zod.string().min(3, 'Informe um logradouro válido'),
  number: zod.number().min(1, 'Informe um número. Coloque 0 caso não tenha.'),
  complement: zod.string(),
  district: zod.string().min(3, 'Informe um logradouro válido'),
  city: zod.string().min(2, 'Informe uma cidade válida.'),
  uf: zod.enum(UF_STATES),
});

type AddressFormData = zod.infer<typeof addressFormValidationSchema>;

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

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  });

  const { handleSubmit, watch, reset, setValue, register } = addressForm;
  const valueCepInput = watch('cep');

  function handleChangePayment(payment: Payments) {
    setPaymentSelected(payment);
    changePayment(payment);
  }

  function handleOrderFinish(data: AddressFormData) {
    navigate('/success');
  }

  async function handleGetDataCep() {
    if (valueCepInput.length === 8) {
      const { data }: viaCepProps = await viaCep.get(`/${valueCepInput}/json`);

      if ('erro' in data) {
        return;
      }

      setValue('street', data.logradouro);
      setValue('district', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf);
    }
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleOrderFinish)}>
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
            <input
              type='text'
              placeholder='CEP'
              {...register('cep')}
              onBlur={handleGetDataCep}
            />
            <input type='text' placeholder='Rua' {...register('street')} />
            <input type='number' placeholder='Número' {...register('number')} />
            <div data-after='Opicional'>
              <input
                type='text'
                placeholder='Complemento'
                {...register('complement')}
              />
            </div>
            <input type='text' placeholder='Bairro' {...register('district')} />
            <input type='text' placeholder='Cidade' {...register('city')} />
            <input type='text' placeholder='UF' {...register('uf')} />
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
