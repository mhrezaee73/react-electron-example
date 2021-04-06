import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "./redux/actions";
import { useHistory } from "react-router-dom";


const Page1 = ({ 
  test
}) => {
  const [sample, setSample] = useState(false);
  const history = useHistory();
  return (
    <div
      style={{
        display:'flex',
        flexGrow: '1',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#5555aa',
        flexDirection:'column'
      }}
    >
      <p
        style={{
          fontSize:'30px'
        }}
      >
        Paga 1
      </p>
      <button
        style={{
          width:'150px',
          height:'50px',
          borderRadius:'20px',
          backgroundColor:'aqua'
        }}
        onClick={() => history.push('/page2') }
      >
        navigate to page2
      </button>
    </div>

  );
};

const mapStateToProps = (store) => ({
  test: store.page1.test,
});

export default connect(mapStateToProps, { ...actions })(Page1);
