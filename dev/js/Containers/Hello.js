import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import sayHello from '../Actions/HelloActions';
import Hello from '../Components/Hello';

const mapStateToProps = state => ({
  hello: state.hello,
});

const matchDispatchToProps = () => {};

export default connect(mapStateToProps, null)(Hello);


// const matchDispatchToProps = (dispatch => bindActionCreators({ sayHello }, dispatch));
