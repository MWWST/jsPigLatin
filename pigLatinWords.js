function pigLatin(){
//define a variable to hold our string of word(s)
  var english = prompt("Enter string");
 // put our string into an array, splitting on spaces incase more than one word is entered (sentence)
  var words = english.split(" ");
// define an array to hold our translated words
  var translated = [];

//for each word we pushed into the array from the user's input
  for (var g=0;g<words.length;g++){
  	//push into the translated array, the result of the translate function for the word we pass to it (words[g))
    translated.push(translate(words[g]))
  }
  //print the resulting array, we could join each item in the array with spaces to reform the sentence.
  console.log(translated)
}

//this is the helper function "translate" which does most of the work
function translate(input)
{

	//define our vowels as an array
	var vowels = ['a','e','i','o','u'];

	//first lets see if the word we passed starts with a vowel
	//to do this we need to loop through each vowel and compare it with the first letter of the word which is input[0]
	for (var i=0;i<=vowels.length-1;i++)
	{
	  if (input[0] == vowels[i])
	  {
	//if the first letter matches one of the vowels, we return input+"way" to our main function which will push the word+way into the translated array
	    return(input+"way");
	  }
	}
	// if we don't return from above that means the first letter was not a vowel and so we'll continue 
	// we know that the first letter is a consinent (not accounting for hyphens or special characters)
	// so we define a variable called "endstring" which will hold the consisnets we find, as these are going to be at the end of our new word
	// we also know the first letter is a consisnet so we can initialze endString variable with that letter (input[0])
	var endString = input[0];
	//we define a start string variable which will hold the remainder of the word after all consinents 
	var startString = '';
	// we need to get the last vowel because that is where we will split the existing word to take everything but the consinets and put them into the "start sting"
	// we set lastVowel to be the result of the buildPiggy function which is a helper function that returns the index of the last vowel
	var lastVowel = buildPiggy(input,vowels)

	function buildPiggy(string,vowels)
	{
	//we know the first item in the string is consinent so we need to check the rest of the string starting at position one (since position 0 is the first letter and we already know about that
	//and we will continue looping (iterating the string ) until we find the first vowel
		for (var j=1;j<=input.length-1;j++)
		{
		  
		 
		   //the first for loop above starts us looping through the string. To compare it to vowles, we'll also need to loop through each vowel in the vowels array
		  for (var k=0;k<=vowels.length-1;k++)
		  {
		    
		    if(input[j]==vowels[k])
		    {
		      //if input[j] == vowles[k] then we found a vowel
		  	 // depending on where that vowel is in the string determins what we return 
		     
		      if(j==1){
		      	// if the vowel is in index one then we just return that index because thats the end of the clust of consients
		      	//remember the first letter was a consinent but now the second is a vowel so we don't need to go any further
		        vowelIndex= j;
		        return vowelIndex;
		      }
		      
		      // else if(j==2) {
		      //   //if the vowlel is in index 
		      //   endString+=input[j-1]
		      //   vowelIndex= j;
		      //   return vowelIndex;
		      // }
		      
		      else if(j>1){
		       //if the index of the next vowel is greater than 1 then we have a cluster of consinents

		        for (var p=j-1;p>0;p--){
		        	//we iterate starting at the next vowel and decrement down to 0, adding each consinent to our end string
		          endString+=input[p]
		        }
		         //then we return our vowel index
		        vowelIndex= j;
		        return vowelIndex; 
		      }
		    }  
		  }
		}
	}
	// then we set our startString equal to the remainder of our input starting at the lastVowel we return in the getPiggy helper function
	var startString = input.slice( lastVowel );
	// console.log("StartString:")
	// console.log(startString)
	//we set our final string to our startString+endString+"ay" as per the pig latin rules
	finalString = startString + endString + "ay"
	// console.log(finalString)
	//we return the final string which is returned to the main function
	return finalString;
}
pigLatin()