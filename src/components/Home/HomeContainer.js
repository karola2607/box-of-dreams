import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = (state) => ({
  title: state.home.title,
  image: state.home.image,
});

export default connect(mapStateToProps)(Home);
