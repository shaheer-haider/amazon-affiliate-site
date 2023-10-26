/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8htorli7ky4dmf7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "udngjbiv",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8htorli7ky4dmf7")

  // remove
  collection.schema.removeField("udngjbiv")

  return dao.saveCollection(collection)
})
