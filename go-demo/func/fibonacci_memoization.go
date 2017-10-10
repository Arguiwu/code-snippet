package main
import (
	"fmt"
	"time"
)

const LIM = 41

var fibs [LIM]uint64

func main() {
	var result uint64 = 0
	start := time.Now()
	for i := 0; i < LIM; i++ {
		result = fibonacci2(i)
		fmt.Printf("fibonacci2(%d) is: %d\n", i, result)
	}
	end := time.Now()
	delta := end.Sub(start)
	fmt.Printf("longCalculation took this amount of time: %s\n", delta)
}


func fibonacci2(n int) (res uint64) {
	if fibs[n]!= 0 {
		res = fibs[n]
		return
	}

	if n <= 1 {
		res = 1
	}else {
		res = fibonacci2(n - 1) + fibonacci2(n - 2)
	}
	fibs[n]= res
	return
}