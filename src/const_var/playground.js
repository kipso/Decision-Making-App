console.log("app running in playground");
let visible=false;

const onChange = () => {
	visible=!visible;
	render();
};

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={onChange}> {visible ? 'Hide Details' : 'Show Details'} </button>
			{ visible && (
				<div>
				<p>Hey You Have Some Details</p>
				</div>
			) }
		</div>
		);
	ReactDOM.render(template,appRoot);
}
var appRoot = document.getElementById('app');
render();


