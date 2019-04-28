import { Injectable } from '@angular/core';

export interface INavigation {
    title: string;
    icon?: string;
    url: string;
}

@Injectable()
export class NavigationService {

    public menu: INavigation[]  = [
        { title: 'Главная', url: '/home', icon: 'home' },
        { title: 'Кошелек', url: '/balance', icon: 'logo-bitcoin' },
        { title: 'Настройка кошелька', url: '/setup-wallet', icon: 'build' },
        { title: 'Восстановление доступа', url: '/recovery', icon: 'sync'},
        { title: 'Список нотариусов', url: '/notaries-list', icon: 'list'},
        { title: 'About', url: '/about', icon: 'information-circle-outline'},
    ];

    constructor() { }

    getMenu(): INavigation[] {
        return this.menu;
    }

}
