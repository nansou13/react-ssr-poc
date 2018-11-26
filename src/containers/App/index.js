import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { compose } from 'redux';
import { refreshNearestAppointment } from '../../global.action';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';

import logo from '../../logo.svg';
import '../../App.css';

import Home from '../Home'
import Page1 from '../Page1'
import Page2 from '../Page2'

const App = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img onClick={props.dispatchRefreshAppointment} src={logo} className="App-logo" alt="logo" />
                
                <Router>
                    <div>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/page1">Page1</Link>
                </li>
                <li>
                    <Link to="/page2">Page2</Link>
                </li>
                </ul>
                <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/page1" component={Page1} />
                    <Route path="/page2" component={Page2} />
                    </div>
                </Router>

                <hr/>
{
    props.specialities && (
        <div>
            {props.specialities.map((spe) => (
                <div>{spe.id}</div>
            ))}
        </div>
    )
}
            </header>
      </div>

    );
  };
  
  const mapDispatchToProps = (dispatch) => ({
    dispatchRefreshAppointment: () => dispatch(refreshNearestAppointment()),
  });

  const mapStateToProps = (state) => ({
    specialities: state.common.specialities,
    
  });
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  );
  
  const withSaga = injectSaga({ key: 'AppPage', saga });
  export default compose(
    withConnect,
    withSaga
  )(App);
  