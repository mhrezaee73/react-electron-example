import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";


const Page2 = ({
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
        backgroundColor:'#fa9afa',
        flexDirection:'column'
      }}
    >
      <p
        style={{
          fontSize:'30px'
        }}
      >
        Paga 2
      </p>
      <button
        style={{
          width:'150px',
          height:'50px',
          borderRadius:'20px',
          backgroundColor:'aqua'
        }}
        onClick={() => history.push('/page1') }
      >
        navigate to page1
      </button>
    </div>

  );
};

const mapStateToProps = (store) => ({
  test: store.page2.test,
});

export default connect(mapStateToProps, null)(Page2);
