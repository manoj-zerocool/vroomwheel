
import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import routes from "routes.js";
import sidebarImage from "assets/img/sidebar-3.jpg";

function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);  
  const [myRoute, setMyRoute] = React.useState(); 
  const getRoutes = (routes) => {

    return routes.map((prop, key)=>{
      if (prop.layout === "/admin") {              
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      }       
      else {
        return null;
      }
  
    }

    );
  };

  React.useEffect(() => {
    setMyRoute(window.location.pathname);

    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

    return (
      <>
        <div className="wrapper"> 
          {myRoute=="/admin/Login" ? null : <Sidebar color={color} image={hasImage ? image : ""} routes={routes} /> }                                  
         
          <div className="main-panel"  ref={mainPanel}>

            {myRoute=="/admin/Login" ? null : <AdminNavbar />}
            <div className="content">       
              <Switch>{getRoutes(routes)}</Switch>
            </div>
            {myRoute=="/admin/Login" ? null : <Footer />} 
            
          </div>
        </div>
      </>

    );

}

export default Admin;
