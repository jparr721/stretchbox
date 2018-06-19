package client

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/olivere/elastic"
	"github.com/pkg/errors"
)

// Connector - The elasticsearch client
type Connector struct {
	Host     string `json:"host"`
	Port     string `json:"port"`
	Username string `json:"username"`
	Password string `json:"password"`
}

// Load data from .env file into the client
func (c *Connector) initializeClient() {
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error loading .env file!")
	}

	c.Host = os.Getenv("HOST")
	c.Port = os.Getenv("PORT")
	c.Username = os.Getenv("USERNAME")
	c.Password = os.Getenv("PASSWORD")
}

func (c *Connector) connect() *elastic.Client {
	fmt.Println("Connecting to local cluster...")
	c.initializeClient()
	connectionString := fmt.Sprintf("http://%s:%s@%s:%s", c.Username, c.Password, c.Host, c.Port)

	client, err := elastic.NewClient(elastic.SetURL(connectionString))
	if err != nil {
		cause := errors.New("Failed to connect to elasticsearch")
		err := errors.WithStack(cause)

		panic(err)
	}

	return client
}

// Checks the status of the cluster
func (c *Connector) checkHealth() (string, error) {
	ctx := context.Background()

	client := *c.connect()

	info, code, err := client.Ping(fmt.Sprintf("http://%s:%s", c.Host, c.Port)).Do(ctx)
	if err != nil {
		return "", err
	}

	return fmt.Sprintf("Elasticsearch returned with code %d and version %s\n", code, info.Version.Number), nil
}

// Checks if an index exists, and creates it if it doesn't
func (c *Connector) checkIndex(index, mapping string) bool {
	if len(mapping) == 0 {
		cause := errors.New("Mapping is not valid")
		mes := errors.WithMessage(cause, "Please add a valid mapping")
		fmt.Println(mes)
	}
	client := *c.connect()
	ctx := context.Background()

	exists, err := client.IndexExists(index).Do(ctx)
	if err != nil {
		cause := errors.New("Index does not exist")
		mes := errors.WithMessage(cause, "Attempting to create the index...")
		fmt.Println(mes)
	}

	if !exists {
		_, err := client.CreateIndex(index).BodyString(mapping).Do(ctx)
		if err != nil {
			cause := errors.New("Failed to create index")
			err := errors.WithStack(cause)

			panic(err)
		}
	}

	fmt.Printf("Index: %s has been successfully created with the provided mapping", index)
	return true
}

// The API functions
func search() {

}
