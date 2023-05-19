import React from 'react-dom';
import { Link } from 'react-router-dom';
import carpost from "../data/cars.json";

// Post details
function getCar(id) {
    return carpost.filter(car => { return car.id === parseInt(id) })[0];
}

// Recent post
function changeToMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}

function setDemoDate() {
    var today = new Date();
    carpost.slice(0, 4).map((post) => {
         post.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000);
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the car.json object
        post.postdate = `${changeToMonth(today.getMonth())} ${today.getDate()}, ${today.getFullYear()}`;
        return post;
    });
}

function getRecentPost() {
    var elems = carpost.filter(post => {
        return post.timestamp < new Date(post.postdate);
    });
    return elems;
}

setDemoDate();
// Pagination
function getPostNavigation(items, index) {
    var output = [],
        id, item;
    if (items[index - 1] !== undefined && index - 1 !== -1) {
        item = items[index - 1];
        id = item.id;
        // Show the previous button 
        output.push(<li className="page-item" key={id}><Link className="page-link" to={"/car-details/" + parseInt(id)}>Previous</Link></li>);
    }
    if (items[index + 1] !== undefined && index <= items.length - 1) {
        // Show next button 
        item = items[index + 1];
        id = item.id;
        output.push(<li className="page-item" key={id}><Link className="page-link" to={"/car-details/" + parseInt(id)}>Next</Link></li>);
    }

    return output;
}
// Filter 
function getFilteredPosts(posts, filter = { tag: '', author: '' }) {
    var tagFilter = filter.tag !== undefined && filter.tag !== null && filter.tag !== '';
    var authorFilter = filter.author !== undefined && filter.author !== null && filter.author !== '';
    // Tag filter
    if (tagFilter) {
        posts = posts.filter(post => {
            return (post.tags !== undefined && post.tags !== null) && post.tags.includes(parseInt(filter.tag))
        })
    }
    // Author filter
    if (authorFilter) {
        posts = posts.filter(post => {
            return (post.author !== undefined && post.author !== null) && post.author.includes(parseInt(filter.author))
        })
    }
    return posts;
}
export { getCar, getRecentPost, getFilteredPosts, getPostNavigation };