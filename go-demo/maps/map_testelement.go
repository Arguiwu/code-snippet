package main
import (
	"fmt"
)

func main() {
	var value int
	var isPresent bool

	map1 := make(map[string]int)
	map1["New Delhi"] = 55
	map1["Beijing"] = 20
	map1["Washington"] = 25
	value, isPresent = map1["Beijing"]
	if isPresent {
		fmt.Println(value)
	}else {
		fmt.Println("map1 does not contain Beijing")
	}

	map2 := make(map[string]bool)
	map2["aaa"] = false

	item, isPresent2 := map2["aaa"]

	if isPresent2 {
		fmt.Println(item)
	}else {
		fmt.Println("不存在")
	}
}