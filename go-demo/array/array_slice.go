package main
import (
	"fmt"
)

func main() {
	var arr1 [6]int
	var slice1 []int = arr1[2:5]

	for i := range arr1 {
		arr1[i] = i
	}

	for i := range slice1 {
		fmt.Printf("Slice at %d is %d\n", i, slice1[i])
	}

	slice1 = slice1[0: 4]

	for i := range slice1 {
		fmt.Printf("Slice at %d is %d\n", i, slice1[i])
	}

}