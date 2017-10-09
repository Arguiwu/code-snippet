package main
import (
	"fmt"
	"os"
	"bufio"
)

func main() {
	inputReader := bufio.NewReader(os.Stdin)
	fmt.Println("Please enter your name: ")
	input, err := inputReader.ReadString('\n')

	if err != nil {
		fmt.Println("There were errors reading, exiting program.")
		return
	}

	fmt.Printf("Your name is %s", input)

	switch input {
		case "Philip\r\n":
			fmt.Println("welcome Philip")
		case "Chris\r\n":
			fmt.Println("welcome Chris")
		case "Ivo\r\n":
			fmt.Println("welcome Ivo")
		default:
			fmt.Printf("You are not welcome here! Goodbye!")
	}
}