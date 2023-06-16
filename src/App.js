import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter  } from 'react-router-dom';
const search1_hwer = window.location.pathname;

// const Preloader = React.lazy(() => import("./components/layouts/Preloader"));
// Home
// About
// Blog
// const Blogleft = React.lazy(() => import("./components/pages/Blogleft"));
// const Blogright = React.lazy(() => import("./components/pages/Blogright"));
// const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));
// const Blogdetailsleft = React.lazy(() => import("./components/pages/Blogdetailsleft"));
// const Blogdetailsright = React.lazy(() => import("./components/pages/Blogdetailsright"));
// Cars
// const Cars = React.lazy(() => import("./components/pages/Cars"));
// const Carsright = React.lazy(() => import("./components/pages/Carsright"));
// Booking
// const Booking = React.lazy(() => import("./components/pages/Booking"));
// Pages
// const Gallery = React.lazy(() => import("./components/pages/Gallery"));
const Home = React.lazy(() => import("./components/pages/Home"));
const About = React.lazy(() => import("./components/pages/About"));
const Blog = React.lazy(() => import("./components/pages/Blog"));
const Category = React.lazy(() => import("./components/pages/Category"));
const Cardetails = React.lazy(() => import("./components/pages/Cardetails"));
const Comingsoon = React.lazy(() => import("./components/pages/Comingsoon"));
const privacy_police = React.lazy(() => import("./components/pages/privacy_police"));
const term_condition = React.lazy(() => import("./components/pages/term_condition"));
const contact_us = React.lazy(() => import("./components/pages/Contact"));
const login = React.lazy(() => import("./components/pages/Login"));
const register = React.lazy(() => import("./components/pages/Register"));
const dashboard = React.lazy(() => import("./components/pages/Dashboard"));
const editprofile = React.lazy(() => import("./components/pages/Editprofile"));
const forgotpassword = React.lazy(() => import("./components/pages/Forgotpassword"));
const verifyemail = React.lazy(() => import("./components/pages/Verifyemail"));

if (search1_hwer.indexOf("blogs/news") >= 0) {
  var protocal =window.location.protocol;
  var hostname_hwe = window.location.host;
  var hostname = hostname_hwe.replace('www.','');
if(hostname == 'localhost:3000'){
    
    var path_hwe = protocal+"//blog.vroomwheel.com";

}else{
     var path_hwe = protocal+"//blog."+hostname;


}

  const blog_url = search1_hwer.split("/blogs/news");
  window.location.href  = path_hwe+'/'+blog_url[1];

  var Error =null;
}else if ((search1_hwer.indexOf("collections") >= 0) && (search1_hwer.indexOf("lakhs") <= 1 )){
  var protocal =window.location.protocol;
  var hostname_hwe = window.location.host;
  var hostname = hostname_hwe.replace('www.','');
if(hostname == 'localhost:3000'){
    
    var path_hwe_new = protocal+"//vroomwheel.com";

}else{
     var path_hwe_new = protocal+"//"+hostname;


}
  const blog_url1 = search1_hwer.split("/collections/")[1];
  const new_url = path_hwe_new+"/"+blog_url1;
  localStorage.setItem('city_id', 'all');
  localStorage.setItem('selected_city', 'india');
 
  window.location.href  = new_url;
  var Error =null;
}else if (search1_hwer.indexOf("blog") >= 0 || search1_hwer.indexOf("blog") >= 0) {
  var protocal =window.location.protocol;
  var path_hwe = protocal+"//blog.vroomwheel.com";
  // alert(path_hwe);
 window.location.href  = path_hwe;
}else if (search1_hwer.indexOf("lakhs") >= 0) {
  const blog_url1 = search1_hwer.split("-to-");
  var firstint = blog_url1[0].replace ( /[^\d.]/g, '' )*100000;
  var sectint = blog_url1[1].replace ( /[^\d.]/g, '' )*100000;
  const new_url = path_hwe+"/used-cars-over-"+firstint+"-rs-under-"+sectint+"-rs-in-india";
  localStorage.setItem('city_id', 'all');
  localStorage.setItem('selected_city', 'india');
  window.location.href  = new_url;
  var Error =null;
}else{
  var  Error = React.lazy(() => import("./components/pages/Error"));
}
const Faqs = React.lazy(() => import("./components/pages/Faqs"));
// Contact
const Contact = React.lazy(() => import("./components/pages/Contact"));


// Scroll to Top

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})
const logOut = () => {
  localStorage.removeItem("auth");
  window.location.href = "/"; 
};

function App() {
  return (
    <Router basename={"/"}>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          {/* <Preloader /> */}
          <Switch>
            
            <Route exact path="/" component={Home} />
            
            <Route exact path="/about" component={About} />
           
            {/* <Route exact path="/blog" component={Blog} /> */}
            
            <Route exact path="/used:id" component={Category} />
           
            <Route exact path="/car-details/:query_path" component={props => (<Cardetails {...props} key={window.location.pathname} />)} />
            
            <Route exact path="/coming-soon" component={Comingsoon} />
            
            <Route exact path="/error" component={Error} />
            
            <Route exact path="/contact" component={Contact} />

            <Route exact path="/privacy-policy" component={privacy_police} />

            <Route exact path="/term-condition" component={term_condition} />

            <Route exact path="/contact-us" component={contact_us} />

            <Route exact path="/login" component={Home} />
            {/* <Route exact path="/register" component={register} />
            <Route exact path="/logout" component={logOut} />
            <Route exact path="/dashboard" component={dashboard} />
            <Route exact path="/editprofile" component={editprofile} />
            <Route exact path="/forgotpassword" component={forgotpassword} />
            <Route exact path="/verifyemail" component={verifyemail} /> */}
            <Route exact path="/register" component={Home} />
            <Route exact path="/logout" component={Home} />
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/editprofile" component={Home} />
            <Route exact path="/forgotpassword" component={Home} />
            <Route exact path="/verifyemail" component={Home} />
    
            <Route exact component={Error} />
            
            {/* Extra */}
            {/* <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/gallery" component={Gallery} /> */}
            {/* Booking */}
            {/* <Route exact path="/booking" component={Booking} /> */}
            {/* Pages */}
             {/* <Route exact path="/cars-right" component={Carsright} /> */}
            {/* <Route exact path="/blog/search/:query" component={props => (<Blog {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog/cat/:catId" component={props => (<Blog {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog/tag/:tagId" component={props => (<Blog {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog/user/:authorId" component={props => (<Blog {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog-left" component={Blogleft} />
            <Route exact path="/blog-right" component={Blogright} />
            <Route exact path="/blog-details/:id" component={props => (<Blogdetails {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog-details-left/:id" component={props => (<Blogdetailsleft {...props} key={window.location.pathname} />)} />
            <Route exact path="/blog-details-right/:id" component={props => (<Blogdetailsright {...props} key={window.location.pathname} />)} /> */}
            {/* Cars */}
            {/* <Route exact path="/car/tag/:tagId" component={props => (<Cars {...props} key={window.location.pathname} />)} /> */}
            {/* <Route exact path="/car/author/:authorId" component={props => (<Cars {...props} key={window.location.pathname} />)} /> */}
            {/* <Route exact path="/cars" component={Cars} /> */}
            {/* <Route exact path="/category" component={Category} /> */}
            {/* <Route exact path="/category/:id" component={Category} /> */}
            
          </Switch>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
