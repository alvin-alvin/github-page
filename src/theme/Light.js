export default {

  // GLOBAL
  CONTAINER:{
    display:'flex',
    flex:1,
    flexDirection:'column',
  },
  DEFAULT_TEXT_COLOR:{
    color: 'black'
  },
  SEMI_DARK_TEXT_COLOR: {
    color: '#606060'
  },
  BULLETING: {
    marginTop:6,
    marginRight:8,
    display: 'inline-block',
    borderRadius: 4,
    width: 8,
    height: 8,
    background: '#606060'
  },


  //ROOT
  ROOT_WRAPPER: {
    position: 'absolute',
    display:'flex',
    flexDirection:'column',
    flex:1,
    justifyContent: 'space-between',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: '#FFF'
  },

  // HOME
  nameText:{
    fontSize: 34,
    margin: 0,
    color: '#000'
  },

  // Header

  //SEARCHBAR
  SEARCHBAR_CONTAINER: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  inputText: {
    display: 'flex',
    background: '#FFF',
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
    fontSize: 16,
    color:'',
    border: '1px solid #606060',
    marginRight: 8
  },

  //SEARCH RESULT
  SEARCH_BORDER_NOT_FOUND:{
    marginTop: 16,
    padding: 32,
    border: '1px dotted #606060'
  },

  SEARCH_TEXT_NOT_FOUND:{
    color: 'black',
    fontSize:14
  },
  SEARCH_TEXT_BOLD_NOT_FOUND:{
    color: 'black',
    fontWeight: 'bold',
    fontSize:14
  },

  // Result CCard
  RESULT_CARD_WRAPPER: {
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 4,
    border: '1px solid black',
  },
  RESULT_CARD_HEADER: {
    borderBottom: '1px solid black',
    padding: 8
  },
  RESULT_CARD_TITLE: {
    color: '#C4C4C4C'
  },
  RESULT_CARD_CATEGORY: {
    color: '#606060'
  },

  //DEFAULT CARD
  DEFAULT_CARD_TEXT: {
    fontSize: 21,
    color: 'black'
  }

}