import { Fragment, useContext, useEffect, useState } from 'react';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  QrCode,
} from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext';

import { CoffeeCardCheckout } from '../../components/CoffeeCardCheckout';

import { Payments } from '../../@types/Payments';
import { UF_STATES, viaCepProps } from '../../@types/ViaCep';

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
import { getCepDataFromApiViaCEP } from '../../utils/getDataCep';

const DELIVERY_FEE = 3.5;
const PATTERN_CEP = /^[1-9]\d*$/;

const cepValidationSchema = zod
  .string()
  .length(8, 'Informe um CEP válido')
  .regex(PATTERN_CEP, 'Informe um CEP válido');

const addressFormValidationSchema = zod.object({
  cep: cepValidationSchema,
  street: zod.string().min(3, 'Informe um logradouro válido'),
  number: zod.string().min(1, 'Informe um número. Coloque 0 caso não tenha.'),
  complement: zod.string(),
  district: zod.string().min(3, 'Informe um bairro válido'),
  city: zod.string().min(2, 'Informe uma cidade válida.'),
  uf: zod.enum(UF_STATES),
});

type AddressFormData = zod.infer<typeof addressFormValidationSchema>;

export function Checkout() {
  const navigate = useNavigate();
  const { coffees, totalMoney, changeAddress, payment, changePayment } =
    useContext(CoffeeOrderContext);
  const [paymentSelected, setPaymentSelected] = useState<Payments>(payment);

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  });

  const { handleSubmit, watch, reset, setValue, register, formState } =
    addressForm;
  const valueCepInput = watch('cep');

  function handleChangePayment(payment: Payments) {
    setPaymentSelected(payment);
    changePayment(payment);
  }

  async function handleOrderFinish(addressFormData: AddressFormData) {
    const returnViaCep = await getCepDataFromApiViaCEP(addressFormData.cep);

    if (!returnViaCep) {
      alert(`O CEP ${addressFormData.cep} não existe!`);
      return;
    }
    changeAddress({
      cep: addressFormData.cep,
      street: addressFormData.street,
      number: Number(addressFormData.number),
      complement: addressFormData.complement,
      district: addressFormData.district,
      city: addressFormData.city,
      uf: addressFormData.uf,
    });
    // console.log(addressFormData);

    reset();
    navigate('/success');
  }

  async function handleGetCepData() {
    if (cepValidationSchema.parse(valueCepInput)) {
      const returnViaCep = await getCepDataFromApiViaCEP(valueCepInput);

      if (!returnViaCep) {
        alert(`O CEP ${valueCepInput} não existe!`);
        return;
      } else {
        if (!formState.isSubmitting) {
          setValue('street', returnViaCep.logradouro);
          setValue('district', returnViaCep.bairro);
          setValue('city', returnViaCep.localidade);
          setValue('uf', returnViaCep.uf);
        }
      }
    }

    return;
  }

  useEffect(() => {
    if (!formState.isValid && formState.isSubmitting) {
      if (formState.errors.cep) {
        alert(formState.errors.cep.message);
        return;
      }
      if (formState.errors.street) {
        alert(formState.errors.street.message);
        return;
      }
      if (formState.errors.number) {
        alert(formState.errors.number.message);
        return;
      }
      if (formState.errors.district) {
        alert(formState.errors.district.message);
        return;
      }
      if (formState.errors.city) {
        alert(formState.errors.city.message);
        return;
      }
      if (formState.errors.uf) {
        alert(formState.errors.uf.message);
        return;
      }
    }
  }, [formState]);

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
              placeholder='CEP'
              type='text'
              inputMode='numeric'
              maxLength={8}
              minLength={8}
              // defaultValue={address.cep}
              {...register('cep')}
              onBlur={handleGetCepData}
            />
            <input
              type='text'
              placeholder='Rua'
              // defaultValue={address.street}
              {...register('street')}
            />
            <input
              type='text'
              placeholder='Número'
              // defaultValue={address.number}
              {...register('number')}
            />
            <div data-after='Opicional'>
              <input
                type='text'
                placeholder='Complemento'
                // defaultValue={address.complement}
                {...register('complement')}
              />
            </div>
            <input
              type='text'
              placeholder='Bairro'
              // defaultValue={address.district}
              {...register('district')}
            />
            <input
              type='text'
              placeholder='Cidade'
              // defaultValue={address.city}
              {...register('city')}
            />
            <select {...register('uf')}>
              {UF_STATES.map((uf) => (
                <option key={uf}>{uf}</option>
              ))}
            </select>
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
                    <Fragment key={coffee.name}>
                      <CoffeeCardCheckout coffee={coffee} />
                      <hr />
                    </Fragment>
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
