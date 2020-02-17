
import { connect } from 'react-redux'
import { getMovies } from '../../../actions/movies'
import {Section5} from './index';
const mapStateToProps = state => {
    return {
      movies: getMovies()
    }
  }
  // const mapDispatchToProps = dispatch => {
  //   return {
  //     onTodoClick: id => {
  //       dispatch(toggleTodo(id))
  //     }
  //   }
  // }
  export default connect(
    mapStateToProps
    // mapDispatchToProps
  )(Section5);