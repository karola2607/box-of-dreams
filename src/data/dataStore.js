export const settings = {
  cardCreatorText: "Add new card",
  creator: {
    buttonOK: "OK",
    buttonCancel: "Cancel",
    defaultText: "Add new item",
  },
};

export const pageContents = {
  title: "Buy me a present!",
  image: "https://i.postimg.cc/pr9b3sjV/present.gif",
};

export const cards = [];

const initialStoreData = {
  home: { ...pageContents },
  cards: [...cards],
};

export default initialStoreData;
