'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DwellersSchema extends Schema {
  up () {
    this.create('dwellers', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('dwellers')
  }
}

module.exports = DwellersSchema
