package main

import (
	"gomail"
)

func main() {

	m := gomail.NewMessage()
	m.SetAddressHeader("From", "xxx@qq.com", "admin")
	m.SetHeader("To", 
		m.FormatAddress("xxx@qq.com", "测试"),
	)
	m.SetHeader("Subject", "Gomail")

	m.SetBody("text/html", "测试")

	d := gomail.NewPlainDialer("smtp.qq.com", 465, "xxx@qq.com", "nubhrudbbtlgdcee")

	if err := d.DialAndSend(m); err != nil {
		panic(err)
	}
}
