package main
import "fmt"

func main() {
	var mapList map[string]int
	var mapAssigned map[string]int

	mapList = map[string]int{"one": 1,"two": 2}
	mapCreated := make(map[string]float32)
	mapAssigned = mapList

	mapCreated["key1"] = 4.5
	mapCreated["key2"] = 3.14159
	mapAssigned["two"] = 3

	mf := map[int] func() int {
		1: func() int { return 10 },
		2: func() int { return 20 },
		5: func() int { return 50 },
	}


	fmt.Println(mapList)
	fmt.Println(mapCreated)
	fmt.Println(mapAssigned)
	fmt.Println(mf)

}