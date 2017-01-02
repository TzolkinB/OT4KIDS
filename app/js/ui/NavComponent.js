import React from 'react';

class NavComponent extends React.Component {
	render(){
		return(
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">
			      	<img src="/app/img/ot-logo.png" alt="OT4KIDS logo"/>
		      	</a>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			      	<li className="dropdown nav-links link-margin">
			          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Therapy Services<span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li className="nav-links"><a href="#">Services Offered</a></li>
			            <li className="nav-links"><a href="#">Clinic</a></li>
			            <li className="nav-links"><a href="#">Home Based Treatment</a></li>
			          </ul>
			        </li>
			        <li className="nav-links link-margin"><a href="#">Testimonials</a></li>
			        <li className="dropdown nav-links">
			          <a href="#" className="dropdown-toggle link-margin" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Staff <span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li className="nav-links"><a href="#">Administrative Staff</a></li>
			            <li className="nav-links"><a href="#">Occupational Therapists</a></li>
			            <li className="nav-links"><a href="#">Physical Therapists</a></li>
			            <li className="nav-links"><a href="#">Speech Therapists</a></li>
			          </ul>
			        </li>
			        <li className="nav-links link-margin"><a href="#">Contact</a></li>
			        <li className="nav-links link-margin"><a href="#">Blog</a></li>
			      </ul>
			      
			      <ul className="nav navbar-nav navbar-right">
			        <li><a href="#">Facebook</a></li>
			        <li><a href="#">Instagram</a></li>
			      </ul>
			    </div>
			  </div>
			</nav>
		);
	}
}

export default NavComponent;