import React, { Component, createContext, useEffect } from "react";

export const NavbarContext = createContext();

export class NavbarContextProvider extends Component {
	constructor() {
		super();
		this.state = {
			navbarState: false
		} 
	}

	render() {
		return (
			<NavbarContext.Provider value={{...this.state, updateState: this.updateState.bind(this)}}>
				{ this.props.children }
			</NavbarContext.Provider>
		)
	}
	
	updateState() {
		this.setState(prev=> {
			return { navbarState: !prev.navbarState }
		})
	}
}
