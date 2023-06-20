const lyrics = 'Duto manchitro eke. duto desher majhe mishe. ache onubhuti gulor bebocched';

const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const characters = lyrics.split('');
// console.log(parts);
// console.log(sentences);
console.log(characters);

// Slice , Substring/

const partials = lyrics.slice(5, 8);
console.log(partials);
const partials2 = lyrics.substring(5,8);
console.log(partials2);

// Join

const lyrics3 = [ 'Duto manchitro eke', 
                'duto desher majhe mishe', 
                'ache onubhuti gulor bebocched'];

const JoinLyrics = lyrics3.join(': ')

console.log(JoinLyrics)