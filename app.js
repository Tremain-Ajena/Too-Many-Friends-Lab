var friends = ['Jacy', 'Lyric', 'Breanna', 'Nancy', 'Aleeah'];

// var r = 0;
// var AltScript = (i + ' line of code in the file, ' + i + ' line of code;');
// var AltS2 = (friends[r] + ' strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file.');
// var Script = (i + ' lines of code in the file, ' + i + ' lines of code;');
// var S2 = (friends[r] + '' + 'strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file.');
//Reference Notes: We had to comment out all of the variables above because they were causing 'i' to be undefined within the actual function. The function's variables could only be accessed when actually defined within the loop.



// while(r< friends.length) {
//     console.log(friends[r]);
//     r++
// } //Reference Notes: this section of code is causing the 'friends[r]' in my 'for' loop to be undefined when both sections of code are ran.
//Reference Notes: when this section is commented out, the 'for' loop runs completely through but does not loop through for all of the names in the array above.
// Reference Notes: We scrapped the while function in favor of nesting the "99 lines 'for' loop" into the "friends.length 'for' loop" so that it could cycle through each name in the friends array.

function friendsLoop(){
    for (var j = 0; j < friends.length; j++) {
        for (var i = 99; i > 0; i--) {
            if (i > 1) {

                var Script = i + ' lines of code in the file, ' + i + ' lines of code;';
                var AltS2 = friends[j] + '' + ' strikes one out, clears it all out, ' + (i - 1) + ' line of code in the file.';
                console.log(Script + AltS2)
     
            } else {

                var AltScript = i + ' line of code in the file, ' + i + ' line of code;';
                var AltS2 = friends[j] + '' + ' strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file.';

                console.log(AltScript + AltS2);
            }
        }
    }
}



