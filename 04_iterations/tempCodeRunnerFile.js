const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
];
let result = books.filter((val)=> val.genre ==="Fiction")
result = books.filter((val)=> val.publish>=2000);
// console.log(result);


let arr = [1,2,3,4,5,6,7,8,9]
const arr2 = arr.map((val)=>{
    return val=val+10;
})
// console.log(arr2);

const arr3 = arr.map((val)=>{
    return val>4;
})
// console.log(arr3);

const arr4 = arr.map((val)=>{return val*10})
                .map((val)=>{return val+1;})
                .filter((val)=>{return val>41})
console.log(arr4)
      

//reduce method
let prices = [1,2,3,4,5]
// const total = prices.reduce(function (accumulator, currentvalu){
//     return accumulator+currentvalu
// },0)
const total = prices.reduce((acc,currval)=>acc+currval,0)
console.log(total);

const itemm = [
    {
        name:"mac",
        price:1000
    },
    {
        name:"window",
        price:2000
    }
]
const tot = itemm.reduce((accu, item)=>{
    return accu + item.price
},0)
console.log(tot);
