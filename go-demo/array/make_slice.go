package main
import "fmt"

func main() {
	var slice []int = make([]int, 10)
	for i := 0; i <  len(slice); i++ {
		slice[i] = i * 5
	}

	for i := 0; i < len(slice); i++ {
		fmt.Println(slice[i])
	}
}