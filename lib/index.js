console.log('bentest success');

if (typeof exports != "undefined") { //for importing via npm (adds to bundle)
  exports.bentest = () => alert('bentestSuccess');
} else { //for importing at runtime via <script> tag
  var bentest = () => alert('bentestSuccess');
}