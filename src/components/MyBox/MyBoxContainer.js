import { connect } from "react-redux";
import MyBox from "./MyBox";
import { getCardsForList } from "../../redux/cardsRedux.js";
import { createActionAddCard } from "../../redux/cardsRedux.js";

const mapStateToProps = (state) => ({
  cards: getCardsForList(state),
});

const mapDispatchToProps = (dispatch) => ({
  addCard: (title) =>
    dispatch(
      createActionAddCard({
        title,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyBox);
