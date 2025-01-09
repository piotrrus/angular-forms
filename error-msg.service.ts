import {Injectable} from '@angular/core';

@Injectable()
export class ErrorMsgService {

    /**
     *
     * @param {string} validatorName
     * @param {any} value
     * @returns {string}
     */
    getValidatorErrorMessage(validatorName: string, value?: any) {
        
        const messages = {
            'required':                 'To pole jest wymagane.',
            'maxlength':                'Przekroczono dopuszczalną ilość znaków.',
            'lettersOnly':              'Wstaw tylko litery.',
            'pattern':                  'Niewłaściwy format danych.',
            'email':                    'Wprowadź poprawny adres e-mail.',
        };

        return messages[validatorName];
    }
}
