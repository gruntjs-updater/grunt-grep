//prod:s
var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
var days = [1,5,3];
//prod:s
try {
  console.log(years.0);
}
catch (ex) {
  console.log("Using bracket notation");
  console.log(years[0]);
}