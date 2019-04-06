import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
	<header className="navbar navbar-expand-lg navbar-dark bg-info p-3 mb-2 mx-0 rounded">
		<NavLink to="/" className="navbar-brand">
			CRUD Assignment
		</NavLink>

		<div className="collapse navbar-collapse">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<NavLink to="/" className="nav-link" activeClassName="is-active">
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/add" className="nav-link" activeClassName="is-active">
						Add Posts
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/posts" className="nav-link" activeClassName="is-active">
						Show All Posts
					</NavLink>
				</li>
			</ul>
		</div>
	</header>
);

export default Header;
