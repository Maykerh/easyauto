var React = require('react');

var style = {
	default: {
		backgroundColor: '#2395db',
		display: 'flex',
	    flexDirection: 'column',
	    justifyContent: 'center',
	    backgroundColor: '#2395db',
	    padding: '10px',
	    color: '#FFF'
	},
	image: {
	    width: '80px',
	    height: '80px',
	    borderRadius: '50%',
	    border: '3px solid #FFF',
	    boxShadow: '5px 5px 15px -5px #333'
	},
	text: {
		margin: '0 auto',
		marginTop: '5px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		width: '200px',
		textAlign: 'center'
	}
}

var UserCard = React.createClass({

	render: function () {
		var {imgSrc, userName} = this.props;

		return (
			<div style={style.default}>
				<div style={{margin: '0 auto'}}>
					<img style={style.image} src={imgSrc}/>
				</div>
				<div style={style.text}>
					{userName}
				</div>
			</div>
		);
	}
});

module.exports = UserCard;