package main
import "fmt"

func main() {
	slice := make([]int, 0, 10)

	for i := 0; i < cap(slice); i++ {
		slice = slice[0: i+1]
		slice[i] = i
		fmt.Println(slice[i])
	}
}