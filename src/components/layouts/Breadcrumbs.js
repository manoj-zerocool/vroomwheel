import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {
    render() {
        return (
            <div className="col-12">
                <ul className="custom-flex">
                    <li> <Link to="/" style={{ textTransform: "uppercase", color: "#411c5f", fontWeight: "500", fontFamily: "Futura Md BT", fontSize: "12px", letterSpacing: "1px" }}>Home <i className="fa fa-angle-right"></i></Link> </li> &nbsp;&nbsp;
                    <li className="fw-500 active" aria-current="page" style={{ textTransform: "uppercase", color: "#a593b3", fontWeight: "500", fontFamily: "Futura Md BT", fontSize: "12px" }}>{ this.props.breadcrumb.pagename}</li>
                </ul>
            </div>
        );
    }
}

export default Breadcrumbs;




// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Breadcrumbs extends Component {
//     render() {
//         return (
//             <div className="" style={{background: "grey"  }}>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12" style={{ color: "#000" }}>
//                             <h1 className="text-custom-white">{this.props.breadcrumb.pagename}</h1>
//                             <ul className="custom-flex justify-content-center">
//                                 <li className="fw-500"> <Link to="/" className="text-custom-white">Home</Link> </li>
//                                 <li className="fw-500 active" aria-current="page">{this.props.breadcrumb.pagename}</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div> 
//         );
//     }
// }

// export default Breadcrumbs;