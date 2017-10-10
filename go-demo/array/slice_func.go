package main
import (
	"fmt"
)

func sum(a []int) int {
	s := 0
	for i := range a {
		s += a[i]
	}
	return s
}

func main() {
	var arr = [5]int{0, 1, 2, 3,4}
	fmt.Printf("total is %d\n", sum(arr[:]))
}