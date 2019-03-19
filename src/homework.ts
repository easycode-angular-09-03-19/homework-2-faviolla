/**
 * task 01
 * 
 * Создать декоратор метода addItemInfoDecorator он должен добавлять 
 * поле date в возвращаемом объекте с датой когда был вызван метод а 
 * также поле info в котором будет записан текст состоящий из названия 
 * товара и его цены например: ‘Apple iPhone - $100’;
 * Для того что бы функция была вызвана в правильном контексте внутри 
 * декоратора ее нужно вызывать через 
 * apply let origResult =  originalFunc.apply(this);
 */

function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {
    let originalFunc = descriptor.value;
    descriptor.value = function() {
        let resOriginalFunc = originalFunc.apply(this);
        let date = new Date().toLocaleDateString();
        return `${JSON.stringify(resOriginalFunc)} Date: ${date}`;
    }
}

class Item {
    public price: number;
    public name: string;

    constructor(name: string ,price: number) {
        this.name = name;
        this.price = price;
    }

    @addItemInfoDecorator
    public getItemInfo() {
        return {
            name: this.name, 
            price: this.price
        };
    }
}

let item = new Item('Apple', 100);
console.log(item.getItemInfo());


/**
 * task 02
 * 
 * Создать декоратор класса User. Он должен добавлять в данном классе 
 * поле createDate датой создания класса а также добавлять поле type 
 * в котором будет записана строка ‘admin’ или ‘user’ данную строку 
 * нужно передать в декоратор при вызове. Сам класс и имя декоратора 
 * может быть произвольным.
 * 
 */

function addDate(type: string) {
    return function(targetClass) {
        return class {
            public name: string;
            public type: string = type;
            getType() {
                return this.type;
            }

            constructor(name) {
                this.name = name;
            }
        }
    }
}

@addDate('admin')
class User {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const userOne = new User('Ivan');


/**
 * task 03
 * 
 * Есть два апи для получения и работы с новостями одно для получения 
 * новостей из USA второе из Ukraine. Под эти апи создано по два 
 * интерфейса и по два класса. Переделайте это в namespaces.
 */

// News api USA
interface INews {
    id: number;
    title: string;
    text: string;
    author: string;
}

class NewsService {
    protected apiurl: string = 'https://news_api_usa_url'
    public getNews() {} // method
}

// News api Ukraine
interface INews2 {
    uuid: string;
    title: string;
    body: string;
    author: string;
    date: string;
    imgUrl: string;
}

class NewsService2 {
    protected apiurl: string = 'https://news_api_2_url'
    public getNews() {} // method get all news
    public addToFavorite() {} // method add to favorites
}

/**
 * task 04
 * 
 * Есть два класса Junior и Middle создайте класс Senior который 
 * будет имплементировать этих два класса а также у него будет еще 
 * свой метод createArchitecture реализация данного метода может 
 * быть произвольной.
 */

class Junior {
    doTasks() {
        console.log('Actions!!!');
    }
}

class Middle {
    createApp() {
        console.log('Creating!!!');
    }
}

class Senior {
    createArchitecture() {
        
    }
}
