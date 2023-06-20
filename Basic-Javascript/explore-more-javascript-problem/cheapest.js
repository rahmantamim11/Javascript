const phones = [
    {name: 'Oneplus' , camera: 48 , storage: '32gb' , price: 48000 , color: 'Blue'},
    {name: 'Iphone' , camera: 48 , storage: '32gb' , price: 88000 , color: 'Blue'},
    {name: 'Samsung' , camera: 48 , storage: '32gb' , price: 28000 , color: 'Blue'},
    {name: 'Xiomi' , camera: 48 , storage: '32gb' , price: 18000 , color: 'Blue'},
    {name: 'Realme' , camera: 48 , storage: '32gb' , price: 15000 , color: 'Blue'},
    {name: 'Oppo' , camera: 48 , storage: '32gb' , price: 22000 , color: 'Blue'},
    {name: 'Walton' , camera: 48 , storage: '32gb' , price: 17000 , color: 'Blue'}
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);

console.log(mySelection);