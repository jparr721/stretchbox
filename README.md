# Stretchbox v1.1.0
🚀 Elasticsearch local docker env for testing goodness

## What is this?
This is a locally deployable and extensible system to check elasticsearch endpoints when you're testing your code. This also provides a way for testing data. You can upload your data, and check it against the provided endpoints, or you can use your own code, and run the `creds` command and build your connection string.

## Why?
Sometimes clusters are down, or server access is limited, this helps the developer keep his hands warm and writing code. Also because I need it for work and figured other people might like it.

## Usage
### Requirements
- Docker (with compose)
- Nodejs >= 9

### Running
```
  Options:
      -d      Run the container in detatched mode (no command interpreter)

    Commands:
      generate [COMMAND] Generate data to be used for your session (destroyed on close)
      Generate commands:
        random           Generate random data for testing api endpoints against (can use custom API or built in)
        config           Generate a blank config file to enter data into (not required)

      creds              Show the elasticsearch login credentials and connection string
      load     [FILE]    Load JSON data into elasticsearch from the data directory
      clean              Remove any generated data (for when you need to load your own)
      exit               Exits the program and gives the option to save data
      help               Show this screen
```

Fly on space cowboys. 🚀
