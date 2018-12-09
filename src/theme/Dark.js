export default {

  // GLOBAL
  CONTAINER: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  DEFAULT_TEXT_COLOR: {
    color: 'white'
  },
  SEMI_DARK_TEXT_COLOR: {
    color: '#C9C9C9'
  },
  BULLETING: {
    marginTop:6,
    marginRight:8,
    display: 'inline-block',
    borderRadius: 4,
    width: 8,
    height: 8,
    background: '#C9C9C9'
  },

  //ROOT
  ROOT_WRAPPER: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: '#323232'
  },

  // HOME
  nameText: {
    fontSize: 34,
    margin: 0,
    color: '#FFF'
  },

  // Header

  // SEARCHBAR
  SEARCHBAR_CONTAINER: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-between'
  },
  inputText: {
    display: 'flex',
    background: '#323232',
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
    fontSize: 16,
    color: '#FFF',
    border: '1px solid #FFFFFF',
    outline: 'none'
  },

  //SEARCH RESULT
  SEARCH_BORDER_NOT_FOUND: {
    marginTop: 16,
    padding: 32,
    border: '1px dotted #fff'
  },

  SEARCH_TEXT_NOT_FOUND: {
    color: 'white',
    fontSize: 14
  },

  SEARCH_TEXT_BOLD_NOT_FOUND: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  },

  // Result Card
  RESULT_CARD_WRAPPER: {
    marginTop: 16,
    backgroundColor: '#323232',
    borderRadius: 4,
    border: '1px solid white',
  },
  RESULT_CARD_HEADER: {
    borderBottom: '1px solid white',
    padding: 8
  },
  RESULT_CARD_TITLE: {
    color: 'white'
  },
  RESULT_CARD_CATEGORY: {
    color: '#dbdbdb'
  },

  //DEFAULT CARD
  DEFAULT_CARD_TEXT: {
    fontSize: 21,
    color: 'white'
  }

}