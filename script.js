function threeSum(dec) {
// write your code here
	let bin = '';
    while(dec>0){
        let rem = dec%2;
        bin = rem + bin;
        dec = Math.floor(dec/2);
    }
    return bin;
  
}

module.exports = threeSum;
