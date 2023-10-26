/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ppumczihm21pt9f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vkyjjn6l",
    "name": "isBook",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ppumczihm21pt9f")

  // remove
  collection.schema.removeField("vkyjjn6l")

  return dao.saveCollection(collection)
})
