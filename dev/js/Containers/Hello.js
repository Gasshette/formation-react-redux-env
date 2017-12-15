import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sayHello, getMovies } from '../Actions/HelloActions';
import Hello from '../Components/Hello';

const mapStateToProps = state => ({
  hello: state.hello,
  movies: state.movies,
});

const matchDispatchToProps = dispatch => bindActionCreators({ sayHello, getMovies }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Hello);
