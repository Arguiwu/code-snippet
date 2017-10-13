package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
	"time"
)

type ApiData struct {
	Has_more int    `json:"has_more"`
	Data     []Data `json:"data"`
}

type Data struct {
	Title       string `json:"title"`
	Imgs        []Img  `json:"image_detail"`
	Article_url string `json:"article_url"`
}
type Img struct {
	Url string `json:"url"`
}

var (
	host    string = "http://www.toutiao.com/search_content/?format=json&keyword=%s&count=30&offset=%d"
	hasmore bool   = true
	tag     string
)

func main() {
	for _, tag = range os.Args[1:] {
		hasmore = true
		getByTag()
	}
	log.Println("全部抓取完毕")
}

func getByTag() {
	i, offset := 1, 0
	for {
		if hasmore {
			log.Printf("标签: '%s'，第 '%d' 页, OFFSET: '%d' \n", tag, i, offset)
			tmpUrl := fmt.Sprintf(host, tag, offset)
			getResFromApi(tmpUrl)
			offset += 30
			i++

			time.Sleep(500 * time.Millisecond)
		} else {
			break
		}
	}
	log.Printf("标签: '%s', 共 %v 页，爬取完毕\n", tag, i-1)
}

func getResFromApi(url string) {
	resp, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}

	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}

	var res ApiData
	json.Unmarshal([]byte(string(body)), &res)

	for _, item := range res.Data {
		arr := item.Imgs
		var mySlice []Img = arr[:]
		getImgByPage(item.Title, mySlice)
	}

	if res.Has_more == 0 {
		hasmore = false
	}
}

func getImgByPage(title string, imgs []Img) {
	os.MkdirAll(tag+"/"+title, 0777)
	for _, item := range imgs {
		getImgAndSave(item.Url, title)
	}
}

func getImgAndSave(url string, dirname string) {
	path := strings.Split(url, "/")
	var name string
	if len(path) > 1 {
		name = path[len(path)-1]
	}

	resp, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Fatal("请求失败", err)
		return
	}

	contents, err := ioutil.ReadAll(resp.Body)
	defer func() {
		if x := recover(); x != nil {
			return
		}
	}()

	err = ioutil.WriteFile(tag+"/"+dirname+"/"+name+".jpg", contents, 0644)
	if err != nil {
		log.Fatal("写入文件失败", err)
	}
}
