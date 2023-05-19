import React, { Component, Fragment } from 'react';

class NavHelper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Nav toggle
            navMethod: false,
            // Sticky
            windowSize: "",
            stickyHeader: 0
        };
        // Nav toggle
        this.toggleNav = this.toggleNav.bind(this);
    }
    // Nav toggle
    toggleNav() {
        this.setState({
            navMethod: !this.state.navMethod
        });
    }
    // Sticky header
    StickyHeader = e => {
        const windowSize = window.scrollY;
        const stickyHeader = (windowSize > 100);
        this.setState(() => {
            return {
                stickyHeader
            };
        });
    };
    componentDidMount() {
        window.addEventListener("scroll", this.StickyHeader);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.StickyHeader);
    }
    // Mobile menu
    getNextSibling = function (elem, selector) {
        var sibling = elem.nextElementSibling;
        if (!selector) return sibling;
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }
    }
    // triggerChild = (e) => {
    //     let subMenu = '';
    //     let subMenuClass = "submenu";
    //     subMenu = (this.getNextSibling(e.target, '.' + subMenuClass) !== undefined) ? this.getNextSibling(e.target, '.' + subMenuClass) : null;
    //     if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
    //         subMenu.classList = subMenu.classList.contains('d-block') ? subMenuClass : subMenuClass + ' d-block';
    //     }
    // }
    render() {
        return (
            <Fragment />
        );
    }
}

export default NavHelper;