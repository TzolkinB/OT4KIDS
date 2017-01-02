import React from 'react';

class FooterComponent extends React.Component {
	render(){
		return(
			<div className="footer">
				<div className="container-fluid">
				<hr/>
					<div className="nav navbar-nav footer-buttons">
						<button type="button" className="btn btn-default navbar-btn">Careers</button>
					  <button type="button" className="btn btn-default navbar-btn">Employee Email</button>
					</div>
					<div className="nav navbar-nav navbar-right">
			      <p className="footer-address">440 CENTRAL AVENUE | LEXINGTON, NC 27292</p>
						<p className="footer-address">PHONE 336.236.6546 | FAX 336.236.9546</p>
						<br/>
						<p className="copyright">©2016 OT4KIDS INC. ALL RIGHTS RESERVED.</p>
			    </div>
				</div>
			</div>
		);
	}
}

export default FooterComponent;