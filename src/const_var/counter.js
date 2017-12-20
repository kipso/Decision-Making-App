//using state component 


class Counter extends React.Component {
	constructor(props){
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleSub = this.handleSub.bind(this);
		this.handleReset = this.handleReset .bind(this);
		this.state = {
			count: 0
		};
	}
	componentDidMount () {
		const value = localStorage.getItem('count');
		const count = parseInt(value,10);
		if(!isNaN(count))
		{
			this.setState(()=>({ count }));
		}
	}
	componentDidUpdate(prevProp,prevState){
		if(prevState.count !== this.state.count){
			const value = this.state.count;
			localStorage.setItem("count",value)
		}
	}
	componentWillUnmount(){
		console.log("Unmounted");
	}
	handleAdd(){
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}
	handleSub(){
		this.setState((prevState) => {
			return {
				count: prevState.count - 1 
			};
		});
	}
	handleReset(){
		this.setState(()=>{
			return{
				count: 0
			};
		});
	}
	render(){
		return (
			<div>
				<h1>Count : {this.state.count} </h1>
				<button onClick={this.handleAdd}>Add</button>
				<button onClick={this.handleSub}>Sub</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
			);	
	}
}

ReactDOM.render(<Counter />,document.getElementById('app'));