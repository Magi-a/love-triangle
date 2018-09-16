/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */



module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  var ArrayLength = preferences.length;

  UniqueTriangels = [];


  for(var i = 0; i < ArrayLength; i++){

    var triangle = [];

    var a;
    var b;
    var c;

    if(preferences[i] !== i+1 && preferences[i] > 0 && preferences[i] <= ArrayLength){

      a = preferences[i];

      if(preferences[a-1] !== a-1 && preferences[a-1] !== i+1 && preferences[a-1] > 0 && preferences[a-1] <= ArrayLength){

        b = preferences[a-1];

        if (preferences[b-1] === i+1) {

          c = preferences[b-1];
          
          triangle = [a, b, c];

          // add to array of triangels
          //console.log(triangle);

          if(UniqueTriangels.length === 0){
            UniqueTriangels[0] = triangle;
          } else {

            var unique = true;

            for(var y = 0; y < UniqueTriangels.length; y++){
              UniqueTriangels[y]

              var temp = UniqueTriangels[y].filter(function(obj) { return triangle.indexOf(obj) >= 0; });
              
              if(temp.length !== 0) { 
                unique = false;
                break;
              }
            }

            if(unique === true){
              UniqueTriangels.push(triangle);
            }
          }






        }
      }
    }

  }

  //console.log(UniqueTriangels);

  return UniqueTriangels.length;

};
