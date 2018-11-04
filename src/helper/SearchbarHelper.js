import { WORDLIST } from "./Wordlist";
import { RESPONSE_LIST } from "./ResponseList";

export function searchbarHelper(str, rule) {
  return new RegExp("^" + rule.split("*").join(".*") + "$").test(str);
}

export function getSearchCategory(input){
  // getKeyByValue(WORDLIST, input.toUpperCase())
  let object = WORDLIST
  let value = input.toUpperCase()
  var categoriesObject = Object.keys(object).find(key => searchbarHelper(value,'*'+object[key]+'*'))
  var categories = categoriesObject!== undefined? categoriesObject.replace(/_[0-9]/g, '') : null
  return(categories)
}

