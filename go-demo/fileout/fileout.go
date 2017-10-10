package main
import (
	"os"
	"bufio"
	"fmt"
)

func main() {
	fmt.Println("create file begin!")
	
	outputFile, outputError := os.OpenFile("output.dat", os.O_WRONLY|os.O_CREATE, 0666)
	if outputError != nil {
		fmt.Printf("An error occurred with file opening or creation\n")
		return
	}

	defer outputFile.Close()

	outputWriter := bufio.NewWriter(outputFile)
	outputString := "Hello world!\n"
	for i:=0; i < 100; i++ {
		outputWriter.WriteString(outputString)
	}
	outputWriter.Flush()
	fmt.Println("create file end!")
}