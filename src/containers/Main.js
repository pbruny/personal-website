import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Experience from "../pages/experience/Experience";
import Projects from '../pages/projects/Projects';
import { settings } from '../portfolio.js';

export default class Main extends Component {
	render() {
		const theme = this.props.theme;
		if(settings.isSplash){
		return (
			<div>
				<HashRouter basename="/">
					<Switch>
						<Route
							path="/"
							exact
							render={(props) => (
								<Splash
									{...props}
									theme={theme}
								/>
							)}
						/>
						<Route
							path="/home"
							render={(props) => (
								<Home
									{...props}
									theme={theme}
								/>
							)}
						/>
						<Route
							path="/experience"
							exact
							render={(props) => (
								<Experience
									{...props}
									theme={theme}
								/>
							)}
						/>
						<Route
							path="/projects"
							render={(props) => (
								<Projects
									{...props}
									theme={theme}
								/>
							)}
						/>
					</Switch>
				</HashRouter>
			</div>
		);}
		else{
			return (
				<div>
				<HashRouter basename="/">
					<Switch>
						<Route
							path="/"
							exact
							render={(props) => (
								<Home
									{...props}
									theme={theme}
								/>
							)}
						/>
						<Route
							path="/home"
							render={(props) => (
								<Home
									{...props}
									theme={theme}
								/>
							)}
						/>
						<Route
							path="/experience"
							exact
							render={(props) => (
								<Experience
									{...props}
									theme={theme}
								/>
							)}
						/>
						<Route
							path="/projects"
							render={(props) => (
								<Projects
									{...props}
									theme={theme}
								/>
							)}
						/>
					</Switch>
				</HashRouter>
				</div>
			);
		}
	}
}
