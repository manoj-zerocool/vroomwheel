import React from 'react-dom';
import { Link } from 'react-router-dom';
import blogpost from "../data/blog.json";
import blogcategory from '../data/blogcategory.json';

function setCategoriesCount() {
    for (let i = 0; i < blogcategory.length; i++) {
        var count = blogpost.filter(post => { return post.category.includes(parseInt(blogcategory[i].id)) });
        count = count.length;
        blogcategory[i].count = count;
    }
}
setCategoriesCount();
// Post details
function getBlog(id) {
    return blogpost.filter(blog => { return blog.id === parseInt(id) })[0];
}
// Related post
function getPostByCategory(items, pageRoute) {
    var elems = blogpost.filter((post) => { return parseInt(post.id) !== parseInt(pageRoute) && post.category.some(r => items.includes(r)) });
    return elems;
}

// Recent post
function changeToMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}

function setDemoDate() {
    var today = new Date();
    blogpost.slice(0, 3).map((post) => {
         post.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000);
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the blog.json object
        post.postdate = `${today.getDate()} ${changeToMonth(today.getMonth())}, ${today.getFullYear()}`;
        return post;
    });
}

function getRecentPost() {
    var elems = blogpost.filter(post => {
        return post.timestamp < new Date(post.postdate);
    });
    return elems;
}

setDemoDate();
// Get Date
function getDateInitials(string) {
    var names = string.split(' '),
        initials = '<div class="text-custom-white fw-600 date bg-custom-blue">' + names[0].substring(0, 2) + '</div>';

    if (names.length > 2) {
        initials += '<div class="text-custom-white year">' +names[names.length - 2].substring(0, 3).toUpperCase() + " 22";
    }
    return initials;
}
// Pagination
function getPostNavigation(items, index) {
    var output = [],
        id, item;
    if (items[index - 1] !== undefined && index - 1 !== -1) {
        item = items[index - 1];
        id = item.id;
        // Show the previous button 
        output.push(<li className="page-item" key={id}><Link className="page-link" to={"/blog-details/" + parseInt(id)}>Previous</Link></li>);
    }
    if (items[index + 1] !== undefined && index <= items.length - 1) {
        // Show next button 
        item = items[index + 1];
        id = item.id;
        output.push(<li className="page-item" key={id}><Link className="page-link" to={"/blog-details/" + parseInt(id)}>Next</Link></li>);
    }

    return output;
}
// Filter 
function getFilteredPosts(posts, filter = { cat: '', tag: '', author: '', searchQuery: '' }) {
    var catgoryFilter = filter.cat !== undefined && filter.cat !== null && filter.cat !== '';
    var tagFilter = filter.tag !== undefined && filter.tag !== null && filter.tag !== '';
    var authorFilter = filter.author !== undefined && filter.author !== null && filter.author !== '';
    var searchFilter = filter.searchQuery !== undefined && filter.searchQuery !== null && filter.searchQuery !== '';
    // Category filter
    if (catgoryFilter) {
        posts = posts.filter(post => {
            return (post.category !== undefined && post.category !== null) && post.category.includes(parseInt(filter.cat))
        })
    } 
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
    if (searchFilter) {
        posts = posts.filter(post => {
            return (post.title !== undefined && post.title !== null) && post.title.toLowerCase().includes(filter.searchQuery.toLowerCase())
        })
    }
    return posts;
}
export { getBlog, getFilteredPosts, getRecentPost, getPostByCategory, getDateInitials, getPostNavigation };