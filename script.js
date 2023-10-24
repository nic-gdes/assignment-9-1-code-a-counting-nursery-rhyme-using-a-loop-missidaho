var word = "sausages";
    var count = 10;

   while (count > 0) {
     console.log(count + " " + word + " sizzling in a pan, ");
    //  console.log(count + " " + word + " sizzling in a pan, one went pop and the other went bang");
     console.log("one went pop and the other went bang");
     count = count - 2;

   if (count > 1) {
    //   console.log(count + " " + word + " sizzling in a pan, one went pop and the other went bang");
   } else {
      console.log("No more " + word + " sizzling in a pan.");
     }
 }

 //Similar to above except variables are named and assigned at the same time
//And the last verse is missing... No more bottles left, etc. 

console.log( "Written using a for loop" );
for ( var sausages = 10; sausages >= 2; sausages = sausages -= 2)
    console.log( sausages + " sizzling in a pan, one went pop and the other went bang! ");
console.log("No more sausages sizzling in a pan.")




    // + ( sausages - 2 ) + " sizzling in a pan, one went pop and the other went bang!" + ( sausages - 2 ) + " sizzling in a pan, one went pop and the other went bang!" + "<br><br>"


    //     Ten fat sausages, 
// Eight fat sausages, sizzling in a pan, one went pop and the other went bang!

// Six fat sausages, sizzling in a pan, one went pop and the other went bang!

// Four fat sausages, sizzling in a pan, one went pop and the other went bang!

// Two fat Sausages, sizzling in a pan, one went pop and the other went bang!

// No fat sausages sizzling in a pan




// practice exercise
var container = "bottles";
var fluid = "beer";
var count = 99;
// console.log("count" +  container + "of" +  fluid + " take one down, pass it around")
while (count > 0) {
  console.log( count +  container + " of" +  fluid + " take one down, pass it around" + ( count - 1)  +  container + "of" +   fluid + " take one down, pass it around")
  count = count - 1;
}
console.log ("No More bottles of beer on the wall")


