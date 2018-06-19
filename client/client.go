package client

import (
	"github.com/joho/godotenv"
	"github.com/olivere/elastic"
	"os"
	"fmt"
	"log"
)

// Connector - The elasticsearch client
type Connector struct {
	Host     string
	Port     string
	Username string
	Password string
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
		log.Fatal("Error connecting to local elasticsearch cluster!")
	}

	return client
}

