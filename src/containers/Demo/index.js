import React, { Fragment } from "react";
import { connect } from 'react-redux'
import Header from "../../components/Header";
import { compose } from 'redux';
import { resolveAppointmentNearest } from '../../global.action';

import api from '../../api';
// import Breadcrumb from "../../components/Breadcrumb";
// import Carousel from "../../components/Carousel";
// import TrustSection from "../../components/TrustSection";
// import MenuSidebar from "../../components/Menu/MenuSidebar";
// import ProductsList from "../../components/ProductsList";
// import BrandSection from "../../components/BrandSection";
// import Footer from "../../components/Footer";
// import { Main } from "../../components/Layout";


const Demo = () => {
    return (

            <Fragment>
            <Header />
            {/* <Carousel />
            <TrustSection />
            <Main>
                <MenuSidebar />
                <ProductsList />
            </Main>
            <BrandSection />
            <Footer /> */}
            COUCOU
            </Fragment>

    );
};

Demo.getInitialProps = async function({store}) {
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const {data} = await api.Demo.get()
    console.log(data, '-------------')
    //   await store.dispatch(resolveAppointmentNearest( data ))
    
    
    // const data = await res.json()
  
    // console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    // dispatchRefreshAppointment: () => dispatch(refreshNearestAppointment()),
  });

  const mapStateToProps = (state) => ({
    specialities: state.common.specialities,
  });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Demo);

export default Demo