package main

import (
	"bytes"
	"gomail"
	"html/template"
)

func main() {

	t, _ := template.ParseFiles("email-tmplate.html")

	buffer := new(bytes.Buffer)

	t.Execute(buffer, struct {
		Login string
	}{
		Login: "马上去登录",
	})

	body := buffer.String()

	m := gomail.NewMessage()
	m.SetAddressHeader("From", "xxx@qq.com", "admin")
	m.SetHeader("To",
		m.FormatAddress("xxx@qq.com", "测试"),
	)
	m.SetHeader("Subject", "Gomail")

	m.SetBody("text/html", body)

	d := gomail.NewPlainDialer("smtp.qq.com", 465, "xxx@qq.com", "nubhrudbbtlgdcee")

	if err := d.DialAndSend(m); err != nil {
		panic(err)
	}
}
