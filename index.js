function hasTargetSum(array, target) {
  // Write your algorithm here
  for(i=0; i < array.length; i++){
    let comp = array.splice(0, 1); 
		if(array.includes(target-comp)){
      return true
    }
  }
  return false

}

/* 
@@ -17,6 +25,19 @@ function hasTargetSum(array, target) {
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
	console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

	console.log("");

	console.log("Expecting: true");
	console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

	console.log("");

	console.log("Expecting: false");
	console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10))*/
