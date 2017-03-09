'use strict';

var endingWords = [
  'perro', 'perrito', 'papá', 'viejo',
  'viejo perro', 'cocodrilo', 'viejito', 'zorro'
];

var zorronizr = function(text){
  var zorronizedText = text.split(" ").map(function(word){
    var ch = word.match(/(ch)/);

    if( ch ){
      return word.slice(0, ch.index) + 't' + word.slice(ch.index, word.length);
    }

    return word;
  }).join(' ');

  zorronizedText = zorronizedText.replace(/(trago|chela|cerveza|café)/ig, 'piscola');

  var specialEnd = zorronizedText.match(/(\?|\!|\.|,)$/);
  var ending = ', ' + endingWords[Math.floor(Math.random() * endingWords.length)];

  if( specialEnd ){
    zorronizedText = [
      zorronizedText.slice(0, specialEnd.index),
      ending,
      zorronizedText.slice(specialEnd.index, zorronizedText.length)
    ].join('');
  }else{
    zorronizedText += ending;
  }

  return zorronizedText;
};

module.exports = zorronizr;