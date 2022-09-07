import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  QrCode
} from "phosphor-react";

import { NavBar } from "../../components/NavBar";
import { CoffeeCardCheckout } from "../../components/CoffeeCardCheckout";

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
  SelctedCoffees
} from "./styles";

type Tags = "tradicional" | "especial" | "com leite" | "alcoólico" | "gelado";

// type OptionsPayments = "credit" | "debit" | "money" | "pix";

interface Coffee {
  name: string;
  description: string;
  tags: Tags[];
  value: string;
  image: string;
}

const TAGS: Tags[] = [
  "tradicional",
  "especial",
  "com leite",
  "alcoólico",
  "gelado"
];

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
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
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <div data-after="Opicional">
              <input type="text" placeholder="Complemento" />
            </div>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
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
              <ButtonOptionsPayments isSelected>
                <CreditCard /> CARTÃO DE CRÉDITO
              </ButtonOptionsPayments>
              <ButtonOptionsPayments>
                <Bank /> CARTÃO DE DÉBITO
              </ButtonOptionsPayments>
              <ButtonOptionsPayments>
                <Money /> DINHEIRO
              </ButtonOptionsPayments>
              <ButtonOptionsPayments>
                <QrCode /> PIX
              </ButtonOptionsPayments>
            </OptionsPayments>
          </Payment>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <SelctedCoffees>
            <ListCoffees>
              <CoffeeCardCheckout />
              <hr />
              <CoffeeCardCheckout />
              <hr />
            </ListCoffees>
            <SectionValues>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </div>
            </SectionValues>
            <button type="submit">CONFIRMAR PEDIDO</button>
          </SelctedCoffees>
        </div>
      </form>
    </CheckoutContainer>
  );
}
