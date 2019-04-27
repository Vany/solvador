import { Injectable } from '@angular/core';

export interface INotary {
    title: string;
    address?: string;
    phone?: string;
    metro?: string;

}

@Injectable()
export class NotaryService {

    public list: INotary[]  = [
        {
            title: 'Абдулина Назия Абдульхаковна',
            metro: 'Сухаревская',
            address: 'г. Москва, Грохольский пер., д.30, стр.1',
            phone: '+7 (495) 933-31-24'
        },
        {
            title: 'Авдеева Ирина Владимировна',
            metro: 'Кузьминки',
            address: 'г. Москва, Волгоградский просп., д.70',
            phone: '+7 (495) 172-17-29'
        },
        {
            title: 'Аверина Елена Леонтьевна',
            metro: 'Бауманская',
            address: 'г. Москва, Новорязанская ул., д.31/7, кв.18',
            phone: '+7 (495) 267-51-18'
        },
        {
            title: 'Агаева Аида Балаевна',
            metro: 'Савеловская',
            address: 'г. Москва, Башиловская ул., д.1, стр.2',
            phone: '+7 (495) 213-14-55'
        },
        {
            title: 'Агамиров Натиг Исмаилович',
            metro: 'Арбатская',
            address: 'г. Москва, Знаменка ул., д.9/12, оф.8',
            phone: '+7 (495) 291-44-70'
        }
    ];

    constructor() { }

    getNotayList(): INotary[] {
        return this.list;
    }

}
