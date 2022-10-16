export const UF_STATES = [
  'RO',
  'AC',
  'AM',
  'RR',
  'PA',
  'AP',
  'TO',
  'MA',
  'PI',
  'CE',
  'RN',
  'PB',
  'PE',
  'AL',
  'SE',
  'BA',
  'MG',
  'ES',
  'RJ',
  'SP',
  'PR',
  'SC',
  'RS',
  'MS',
  'MT',
  'GO',
  'DF',
] as const;

export type viaCepProps = {
  data: {
    bairro: string;
    cep: string;
    complemento: string;
    // ddd: string;
    // gia: string;
    // ibge: string;
    localidade: string;
    logradouro: string;
    // siafi: string;
    uf: typeof UF_STATES[number];
  };
};
