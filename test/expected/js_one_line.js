var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]; //dev
try {
  console.log(years.0);
}
catch (ex) {
  console.log("Using bracket notation");
  console.log(years[0]);
}