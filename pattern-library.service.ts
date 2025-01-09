import { Injectable } from '@angular/core';

@Injectable()
export class PatternsLibraryService {
    getPatterns(patternName: string) {
        const patterns = {
            'NUMBERS_REGEXP':        '/^[0-9]*$/u',
            'LETTERS_REGEXP':        '^[a-zA-Z]+$',
            'CASH_REGEXP':           '^[\-]?[0-9]+[\,]?[0-9]{0,2}$',
            'EMAIL_REGEXP':          '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
            'POSTAL_CODE_REGEXP':    '^[0-9]{2}\-[0-9]{3}$',
            'PHONE_REGEXP':          '[0-9]+'
        };
        return patterns[patternName];
    }
}

