// Fisher-Yates algorithm

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){           // از آخر آرایه تا اول حلقه می‌زند
        const random = Math.floor(Math.random() * (i + 1)); // یک اندیس تصادفی بین 0 تا i انتخاب می‌کند

        [array[i], array[random]] = [array[random], array[i]]; // مقدار عنصر فعلی و عنصر تصادفی را جابجا می‌کند
    }
}