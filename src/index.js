module.exports = function multiply(first, second) {

  function MakeRawMultiply( a, b ){
    let strFirstNum = a.toString();
    let strSecondNum = b.toString();

    let mulResult = new Array( strFirstNum.length + strSecondNum.length - 1 ).fill( 0 );

    for ( let i1 = strFirstNum.length - 1; i1 >= 0; i1-- ){
      let firstDigit = parseInt( strFirstNum[ i1 ] );
      for( let i2 = strSecondNum.length - 1; i2 >= 0; i2-- ){
        let secondDigit = parseInt( strSecondNum[ i2 ] );
        let currMultiply = firstDigit * secondDigit;
        mulResult[ i1+i2 ] += currMultiply;
      }

    }

    return mulResult.reverse(); ;
  }

  function NormalizeResult( multArray ){

    let resultArray = [ ...multArray ];
    let valueMove = 0; let valueRemnant = 0;
    for( let i = 0; i < multArray.length; i++ ){
      let currValue = resultArray[ i ];
      valueRemnant = currValue % 10 ;
      valueMove = Math.floor( currValue / 10 );
      resultArray[ i ] = valueRemnant;
      if( valueMove > 0 ){
        if( resultArray[ i+1 ] ){
          resultArray[ i+1 ] =  valueMove + resultArray[ i+1 ];
        } else {
          resultArray[ i+1 ] = valueMove;
        }
      }
    }

    return resultArray;
  }

  let rawMult = MakeRawMultiply( first, second );
  let normMult = NormalizeResult( rawMult );

  return normMult.reverse().join( '' );

  // your solution
}
