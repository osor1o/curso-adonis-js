'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostagensSchema extends Schema {
  up () {
    this.create('postagens', (table) => {
      table.increments()
      table.string('titulo', 120).notNullable().unique()
      table.text('corpo').notNullable()
      table.string('imagem', 255).notNullable()
      table.integer('usuarioId').unsigned()
      table.foreign('usuarioId').references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('postagens')
  }
}

module.exports = PostagensSchema
