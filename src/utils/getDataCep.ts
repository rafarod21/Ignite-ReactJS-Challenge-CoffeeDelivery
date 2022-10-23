import { viaCepProps } from '../@types/ViaCep';

import { viaCep } from '../services/apiViaCep';

export async function getCepDataFromApiViaCEP(cep: string) {
  const { data }: viaCepProps = await viaCep.get(`/${cep}/json`);

  if ('erro' in data) {
    return false;
  }

  return data;
}
