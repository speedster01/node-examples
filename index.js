var rect=require('./rectangle');

function solveRect(l,b){
  console.log("Solving for Rectangle with l ="+l+ " and b ="+b);

  if(l<=0 || b<=0){
    console.log("Rectangle doesn't exist");
  }
  else{
    console.log("The area of Rectangle is "+rect.area(l,b));
    console.log("The perimeter of Rectangle is "+rect.perimeter(l,b));
  }
}

solveRect(2,4);
solveRect(0,4);
solveRect(10,12);
solveRect(-1,3);
