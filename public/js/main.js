let products = [
    {
        title: 'Гавана',
        price: '69 990 ₽',
        img: '../imgs/Гавана.png'
    },
    {
        title: 'Шато соты',
        price: '5 590 ₽',
        img: '../imgs/Шато.jpg'
    },
    {
        title: 'Корсика',
        price: '16 890 ₽',
        img: '../imgs/Корсика.png'
    },
    {
        title: 'Римини',
        price: '26 790 ₽',
        img: '../imgs/Римини.png'
    },
    {
        title: 'Дейзи',
        price: '5 190 ₽',
        img: '../imgs/Deyzy.png'
    },
    {
        title: 'Эльзас',
        price: '7 190 ₽',
        img: '../imgs/Elzas.png'
    },
    {
        title: 'Оскар',
        price: '29 190 ₽',
        img: '../imgs/Oskar.png'
    },
    {
        title: 'Орландо',
        price: '39 390 ₽',
        img: '../imgs/orlando.png'
    }
]



let queryDict = {}
// eslint-disable-next-line no-restricted-globals
location.search.substr(1).split('&').forEach(function(item) {queryDict[item.split('=')[0]] = item.split('=')[1]})
document.querySelector(".location").innerHTML = "Главная - Каталог - " + products[queryDict.id].title
document.querySelector(".name-info").innerHTML = products[queryDict.id].title
document.querySelector(".price-info").innerHTML = products[queryDict.id].price
document.querySelector(".img-info").setAttribute('src', products[queryDict.id].img)


