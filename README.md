# Stretchbox v0.6.20
🚀 Elasticsearch local docker env for testing goodness

## What is this?
This is a locally deployable and extensible system to check elasticsearch endpoints when you're testing your code. 

## Why?
Sometimes clusters are down, or server access is limited, this helps the developer keep his hands warm and writing code. Also because I need it for work and figured other people might like it.

## Usage
### Requirements
- Docker
- Nodejs >= 9

### Running
```
  npm run cmd [OPTION]

  OPTIONS --------------------------------------------------------------
    createIndex   [NAME]            Create the index
    deleteIndex   [NAME]            Delete the index
    init          [NAME], [TYPE]    Set up the environment
    build                           Build and run all containers
    generate [OPTION]
      config                        Generates a new config file if none exists
      bulk [NAME], [TYPE]           Generates new bulk data for an Elasticsearch instance (requires config)`
```

Fly on space cowboys. 🚀
