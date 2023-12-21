// Allows us to check series of characters for matches

// e.g it allows us to check a from field to try and match a valid email address
// ->>>>> it must have an @ symbol at a certain position
// ->>>>> it must end in a extension like .com or .org .....

// regular exps allow us to check these kind of things

// examples :

/ninja/; // this finds the first match and returns it, if there is not any flag attached
/ninja/g; // -g flag means global, which means it looks for more than one matches
/ninja/i; // -i flag means insensitive which does not care about case,
/ninja/gi;
// ninja Ninja  above example will choose boht word as matches, cuz, g flag to choose more than one, -i flag to choose case insensitive

/[ng]inga/g; // in [] brackets we can give character set , which means for the first letter, it will match either n or g

/[^ng]inga/g; // inside of character set , if we use ^ whcih means it willl turn to exclude set, which matches will the the rest of chars without thses in the exclude set

/[a-z]inga/g;
/[0-9]inga/g;
/[0-9a-zA-Z]inga/g;
/[a-zA-Z]inga/g; //these kind of things re called ranges, which means, all the characters inside will be covered as the part of the set,

// repeating characters

/[0-9][0-9][0-9]inga/g; // to avoid repeating we could use this [next line]
/[0-9]+inga/g; // + sing means unlimited times add one , which means it could go unlimited, it is base for uour thing, but not we wanted let's see:
/[0-9]{3}inga/g;
/[a-z]{5, 8}alifbe/g;
// using curly braces with the number inside avoids repetition, we can write any number, and it will limit the continuity after that times, like here {3} times , or we can igve also approx times, which kinda looks like ranges {5, 8}  which matches for 5, 6, 7, 8
/[0-9]{3,}inga/g; // this means match at least 3 times, it could go infinity , but does not accept less than 5

// Meta characters

// - \d match any digit character (same as [0-9])
// - \w match any word character (a-z, A-Z, 0-9, _'s)
// - \s match a whitespace character (spaces, tabs , etc)
// - \t match a tab character only

//    d -- matches literal character 'd'
//    \d --  matches any digit character // like we should write them with backslash

/\d{3}\s\w{5}/g; // '333    rooms'  or '333 rooms'



// special characters


// '+'  the one-or-more quantifier
// '\'  the excape character
// '[]'  the character set
// '[^]' the negate symobol in a character set
// '?'  the zero oro one quantifier (makes a preceeding character optional)  like 
/hello?/g // these is o is optional hell, and hello are acceptable
// '.'  aby character whatsoever (except the newline character )
/hello./g
// '*' zero or more quantifies (a bit like +)
/a[a-z]*/ // 


    /^[a-z]{5}$/

// ^ for the beginning of the word
// $ fior the end of the word


    / (p | t)yer / i; // pyer fo tyer both are acceptable
/ (pet|toy|crazy) ?rabbit/gi; 
    
