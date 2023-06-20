const color = 'yellow';
if (color === 'green'){
    console.log('Home Football Match')
}

else if (color === 'red'){
    console.log('Away Football Match')
}

else if (color === 'white'){
    console.log('Quarter Final Football Match')
}

else if (color === 'black'){
    console.log('Semi final Football Match')
}

else if (color === 'yellow'){
    console.log('final Football Match')
}

else {
    console.log('world cup champion')
}

// switch

switch(color){
    case 'green':
        console.log('you are my green friend')
        break;
    case 'blue':
        console.log('you are my blue friend')
        break;
    case 'white':
        console.log('you are my white friend')
        break;
    default:
        console.log('you are my black friend')            
}