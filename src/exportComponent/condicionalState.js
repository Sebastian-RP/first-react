// import React from 'react'
// -- // simply I don't know enough, this is not works
// class loginControl extends React.Component{
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false}
//     }

//     handleLoginClick(){
//         this.setState({isLoggedIn: true})
//     }

//     handleLogoutClick(){
//         this.setState({isLoggedIn: false})
//     }

//      LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

//  LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {    return <UserGreeting />;  }  return <GuestGreeting />;}

//     render(){
//         var isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if (isLoggedIn) {
//         button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//         button = <LoginButton onClick={this.handleLoginClick} />;    
//         }    
//         return (      
//         <div>  
//             <Greeting isLoggedIn={isLoggedIn} />        
//             {button}      
//         </div>
//         );
//     }
// }

// export default loginControl;
