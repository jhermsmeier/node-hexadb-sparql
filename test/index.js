var assert = require( 'assert' )
var MemDB = require( 'memdb' )
var HexaDB = require( 'hexadb' )
var SPARQL = require( '..' )

var memdb = new MemDB()
var db = new HexaDB( memdb )
var sparql = new SPARQL( db )

describe( 'Primitive Queries', function() {
  
})
