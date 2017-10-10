package main
import "fmt"

func main() {
	p := add()
	fmt.Println(p(3))

	x := adder(2)
	fmt.Println(x(3))
}


func add() func(b int) int {
	return func(b int) int {
		return b + 2
	}
}

func adder(a int) func(b int) int {
	return func(b int) int {
		return a + b
	}
}