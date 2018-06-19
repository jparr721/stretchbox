package client

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/olivere/elastic"
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

// The API functions
func search() {

}
