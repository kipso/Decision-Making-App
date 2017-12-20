//Let Const Var variable declarations
// var nameVar = "Kipso";
// nameVar = "Stephin";
// var nameVar ="Rogers";
// console.log("nameVar",nameVar);

// let nameLet = "Kipso";
// nameLet="Steve";
// console.log("nameLet",nameLet);

// const nameConst = " kipso";
// console.log("nameConst",nameConst)


//Normal function
// const square = function multiply (x) {
// 	return x*x;
// };

//Arrow Function :
// const squareArrow = (x) => {
// 	return x*x;
// };

// const squareArrow = (x) => x*x;
// console.log(squareArrow(6));

// const getFirstName = (fullName) =>  fullName.split(' ')[0];    
// console.log(getFirstName("Stephin Kipso"));

const multiplier = {
	numbers : [2,5,8],
	multiplyBy : 4,
	multiply () {
		return this.numbers.map((number) => this.multiplyBy*number)
	}
};
console.log(multiplier.multiply());


let count = 0;
const addOne = () => {
	count++;
	reactCounter();
	console.log("Button Clicked for",count);
};
const subOne = () => {
	count--;
	reactCounter();
	console.log("Button Clicked for -1");
};
const reset = () => {
	count=0;
	reactCounter();
	console.log("Button Clicked for reset");
};
const reactCounter = () => {
	const templateTwo = (
	 <div>
	 	<h1>Count : {count} </h1>   
	 	<button  onClick={addOne }> On Click add one</button>
	 	<button  onClick={subOne }> On Click sub one</button>
	 	<button  onClick={ reset }> On Click reset</button>
	 </div>
	);
	ReactDOM.render(templateTwo,appRoot);
} 
var appRoot=document.getElementById('app');
reactCounter();