import React from'react';
import './menu.css';
// import ConLog from './imagenes/hambur.jpg';


class Badge extends React.Component{
  render(){
    return(
      <div className="Badget">
        <div className="SectionBadge">
          {/* <img src={ConLog} alt="logo"/> */}
          <h1>
            {this.props.text}
          </h1>
          <div >
          {/* <img 
                 className="Badge__avatar"
                 src={this.props.avatarUrl} 
                 alt="avatar"
                 /> */}
          </div>
        </div>
      </div>

    )
  }
}
  export default Badge;









// class bad extends React.Component{
//     render(){
//         return <div>
//             <Navbar/>
//             <div className="menwaiter">
//                 <div className="Container">
//                     <div className="row">
//                         <div className="col-6">
                          
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>;
//     }
// }
// export default bad;