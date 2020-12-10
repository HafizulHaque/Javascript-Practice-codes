'use strict';
let cl = arg => console.log(arg);

let phrase = 'I love bangladesh. I also love Kashmir, as i dont love either india. Love is an interesting Thing. LOVE!!!';
let target = 'love';

let currentPos = -1;
while((currentPos = phrase.toUpperCase().indexOf(target.toUpperCase(), currentPos+1)) != -1){
  cl(`Found at pos: ${currentPos}`);
}

cl( '𝒳'.codePointAt(0) ); // 2, MATHEMATICAL SCRIPT CAPITAL X
cl( '😂'.codePointAt(0) ); // 2, FACE WITH TEARS OF JOY
cl( '𩷶'.codePointAt(0) ); // 2, a rare Chinese hieroglyph
