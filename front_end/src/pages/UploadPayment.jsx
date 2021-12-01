import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

class UploadPayment extends React.Component {
  render() {
    if (!this.props.userGlobal.username) {
      return <Redirect to="/" />
    }
  
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "50px" }}>
        <h1>Upload Payment Page</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user
  }
}

export default connect(mapStateToProps)(UploadPayment);