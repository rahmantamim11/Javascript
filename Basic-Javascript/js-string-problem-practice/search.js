const lyrics = 'Duto manchitro eke duto desher majhe mishe ache onubhuti gulor bebocched'
// const DoesExist = lyrics.includes('onubhuti');

const searchString = 'Onubhuti'
const lyricsLowerCase = lyrics.toLowerCase();
const searchLowerCase = searchString.toLowerCase();

const DoesExist = lyricsLowerCase.includes(searchLowerCase);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase())

// console.log(DoesExist);
// console.log(doesExistOneLine);

/************
 Index Of
****************/ 

console.log(lyrics.indexOf('manchitro'))

if (lyrics.indexOf('manchitro') !== -1) {
    console.log('The Lyrics Exists')
}

else {
    console.log('the lytrics does not exist')
}

//  startswith 

console.log(lyrics.startsWith('Duto'))

// EndsWith 

const fileName = "Books.pdf";
const imageName = "mypic.png";

console.log(fileName.endsWith('.pdf'))