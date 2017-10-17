#一些golang的练习集合

[今日头条图片爬去取](https://github.com/Arguiwu/code-snippet/blob/master/beauty/main.go)
[邮件发送, 有空添加自定义模板](https://github.com/Arguiwu/code-snippet/blob/master/sending-email/main.go)

#
#
#

# 常用包
| 包名        | 说明   |
| --------   | -----:  |
| fmt | 实现格式化的输入输出操作，其中的fmt.Printf()和fmt.Println()是开发者使用最为频繁的函数 |
| io | 实现了一系列非平台相关的IO相关接口和实现，比如提供了对os中系统相关的IO功能的封装。我们在进行流式读写（比如读写文件）时，通常会用到该包 |
| bufio | 它在io的基础上提供了缓存功能。在具备了缓存功能后，bufio可以比较方便地提供ReadLine之类的操作 |
| strconv | 提供字符串与基本数据类型互转的能力 |
| os | 本包提供了对操作系统功能的非平台相关访问接口。接口为Unix风格。提供的功能包括文件操作、进程管理、信号和用户账号等 |
| sync | 它提供了基本的同步原语。在多个goroutine访问共享资源的时候，需要使用sync中提供的锁机制 |
| flag | 它提供命令行参数的规则定义和传入参数解析的功能。绝大部分的命令行程序都需要用到这个包 |
| encoding/json | JSON目前广泛用做网络程序中的通信格式。本包提供了对JSON的基本支持，比如从一个对象序列化为JSON字符串，或者从JSON字符串反序列化出一个具体的对象等 |
| http | 通过http包，只需要数行代码，即可实现一个爬虫或者一个Web服务器，这在传统语言中是无法想象的 |