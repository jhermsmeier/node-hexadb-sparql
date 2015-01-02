/**
 * SPARQL Constructor
 * @return {SPARQL}
 */
function SPARQL( db, options ) {
  
  if( !(this instanceof SPARQL) )
    return new SPARQL( db, options )
  
  this.db = db
  
}

/**
 * SPARQL Parser
 * @type {Function}
 */
SPARQL.Parser = require( 'sparqljs' ).Parser

/**
 * SPARQL Prototype
 * @type {Object}
 */
SPARQL.prototype = {
  
  constructor: SPARQL,
  
}

// Exports
module.exports = SPARQL
