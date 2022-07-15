import { AbstractControl } from "@angular/forms";

export const mascaraCPF = (y: string) => {

  if(y) {
    y = y.replace(/\D/g, "")

    if (y.length <= 11) {
      y = y.replace(/(\d{3})(\d)/, "$1.$2")
      y = y.replace(/(\d{3})(\d)/, "$1.$2")
      y = y.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    } else {
      y = y.replace(/^(\d{2})(\d)/, "$1.$2")
      y = y.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      y = y.replace(/\.(\d{3})(\d)/, ".$1/$2")
      y = y.replace(/(\d{4})(\d)/, "$1-$2")
    }
  }


  return y
}


export class Validacoes {

  static formataCPF(cpfComMascara: string): string
  {

    let cpfSemMascara = cpfComMascara;

    if(cpfSemMascara) {
      cpfSemMascara = cpfSemMascara.replace(/\./g,'');
      cpfSemMascara = cpfSemMascara.replace('-','');

    }

    return cpfSemMascara;
  }


  static ValidacaoCpf(cpfValor: AbstractControl) {
    const cpfFormat = cpfValor.value;
    const cpf =  Validacoes.formataCPF(cpfFormat);

    let soma: number = 0;
    let resto: number;
    let valido: boolean;

    const regex = new RegExp('[0-9]{11}');

    if (
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999' ||
      !regex.test(cpf)
    )
      valido = false;
    else {
      valido = true;
      for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(9, 10))) valido = false;

      soma = 0;
      for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(10, 11))) valido = false;


    }

    if (valido) return null;

    return { cpfInvalido: true };
  }

}
