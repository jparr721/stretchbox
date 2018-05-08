const version = '1.1.0';
const usage = () => {
  console.log(
    `
    Stretchbox v${version}
    A portable elasticsearch environment 🚀

    Options:
      -d                       Run the container in detatched mode (no command interpreter)

    Commands:
      generate [COMMAND]       Generate data to be used for your session (destroyed on close)
      Generate commands:
        random                 Generate random data for testing api endpoints against (automatically loads)
        config                 Generate a blank config file to enter data into

      creds                    Show the elasticsearch login credentials and connection string
      load     [INDEX] [TYPE]  Load JSON data into elasticsearch from the data directory
      clean                    Remove any generated data (for when you need to load your own)
      exit                     Exits the program and gives the option to save data
      help                     Show this screen
    `
  );
};

module.exports = {
  usage,
  version,
};
