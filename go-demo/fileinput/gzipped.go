package main
import (
	"fmt"
	"bufio"
	"os"
	"compress/gzip"
)

func main() {
	fName := "products2.gzip"
	var r *bufio.Reader
	fi, err := os.Open(fName)
	if err != nil {
		fmt.Fprintf(os.Stderr, "%v, cant open %s: error: %s\n", os.Args[0], fName, err)
		os.Exit(1)
	}
	fz, err := gzip.NewReader(fi)
	if err!= nil {
		r = bufio.NewReader(fi)
	}else {
		r = bufio.NewReader(fz)
	}
	for {
		line, err := r.ReadString('\n')
		fmt.Println(line)
		if err != nil {
			fmt.Println("Done reading file")
			os.Exit(0)
		}
	}
}