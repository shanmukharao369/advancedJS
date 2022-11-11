// console.log('person1:shows ticket');
// console.log('person2:shows ticket');
// const promisewifeBringTickets = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('tickets');
//     },3000)
// });

// const getPopcorn =  promisewifeBringTickets.then((t)=>{
//     console.log('wife: i have tickets ');
//     console.log('husband:we should go in ');
//     console.log('wife:no iam hungry');
//     return new Promise((resolve, reject) => resolve (`${t} popcorn`));
// });

// const butterpopcorn= getPopcorn.then((t)=>{
//     console.log('husband: i got some popcorn ');
//     console.log('husband:we should go in ');
//     console.log('wife:i need butter on my popcorn');
//     console.log('husband:Here is the popcorn with butter,do you need anything else?');
//     console.log('wife:i need some coldDrink');
//     return new Promise((resolve, reject) => resolve (`${t} butter`));
// });
// const getColdDrink = butterpopcorn.then((t)=> {
//     console.log('husband: i got some coldDrink ');
//     console.log('husband:we should go in ');
//     console.log('wife:ok lets go');
//     return new Promise((resolve, reject) => resolve(`${t} coldDrink`))
// });
// getColdDrink.then((t)=> console.log(t));
// console.log('person4:shows ticket');
// console.log('person5:shows ticket');

// using async await instead of above code
console.log('person1:shows ticket');
console.log('person2:shows ticket');
const  preMovie = async()=> {
    const promisewifeBringTickets = new Promise((resolve, reject) => {
        setTimeout(()=> resolve('tickets'),3000);
    });
    const getPopcorn = new Promise((resolve,reject)=>resolve(`popcorn`));

    const addButter = new Promise((resolve,reject) =>resolve(`butter`));

    const getColdDrink = new  Promise((resolve, reject) => resolve(`coldDrink`));

    let tickets = await promisewifeBringTickets;
    console.log(`wife: i have ${tickets}`);
    console.log('husband:we should go in ');
    console.log('wife:no iam hungry');

    let popcorn = await getPopcorn;
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband:we should go in ');
    console.log('wife:i need butter on my popcorn');
    
    let butter = await addButter;
    console.log(`husband: i got some ${butter} popcorn`);
    console.log('husband:anything else ?? ');
    console.log('wife:i need some coldDrink');

    let coldDrink = await getColdDrink;
    console.log(`husband: i got some ${coldDrink}`);
    console.log('husband:we should go in ');
    console.log('wife:ok lets go');

    
    return tickets;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');

//promise.all
console.log('person1:shows ticket');
console.log('person2:shows ticket');
const  preMovie2 = async()=> {
    const promisewifeBringTickets = new Promise((resolve, reject) => {
        setTimeout(()=> resolve('tickets'),3000);
    });
    // if error occures reject
    // let tickets
    // try{
    //     tickets = await promisewifeBringTickets;
    // }catch(e){
    //     tickets='sad face';
    // }


    const getPopcorn = new Promise((resolve,reject)=>resolve(`popcorn`));

    const addButter = new Promise((resolve,reject) =>resolve(`butter`));

    const getColdDrink = new  Promise((resolve, reject) => resolve(`coldDrink`));

    let tickets = await promisewifeBringTickets;

    let [popcorn,butter,coldDrink] = await Promise.all([getPopcorn,addButter,getColdDrink])
    console.log(`${popcorn},${butter},${coldDrink}`);

    return tickets;
}
preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');



