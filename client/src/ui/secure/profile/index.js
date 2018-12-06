// import React, { Component } from 'react'
// import { AutoLoginOrRedirect } from '../.././../state/processes/auth/login'

// import { Page } from './styles'

// class ProfilePage extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       email: !props.user ? '' : props.user.email,
//       username: !props.user ? '' : props.user.username
//     }
//   }
  
//   componentWillReceiveProps(nextProps) {
//     if(typeof nextProps.user !== undefined) {
//       if(typeof nextProps.user.username !== undefined && nextProps.user.username != this.props.user.username) {
//         this.setState({username: nextProps.user.username})
//       }
//       if(nextProps.user.email != this.props.user.email) {
//         this.setState({username: nextProps.user.email})
//       }
//     }
//   }
//   render() {
//     return (
//       <Page>
            
//               Hi there {this.props.user.name}, aka {this.props.user.username} your email is: {this.props.user.email}
            
//       </Page>
//     )
//   }
  
// }
// const mapStateToProps = state => {
//   return {
//     user: state.loginpage.user,
//     loading: state.loginpage.loading,
//     onlineFriends: state.landingpage.onlineFriends,
//     onlineUsers: state.landingpage.onlineUsers,
//     loginStatus: state.landingpage.loginStatus
//   }
// }

// export default AutoLoginOrRedirect(ProfilePage)
