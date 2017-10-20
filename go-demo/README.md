# 一些golang的练习集合

> * [今日头条图片爬去取](https://github.com/Arguiwu/code-snippet/blob/master/beauty/main.go)
> * [邮件发送, 有空添加自定义模板](https://github.com/Arguiwu/code-snippet/blob/master/sending-email/main.go)

#
#
#

# 常用包
| 包名 | 说明 |
| -------- | ----- |
| fmt | 实现格式化的输入输出操作，其中的fmt.Printf()和fmt.Println()是开发者使用最为频繁的函数 |
| io | 实现了一系列非平台相关的IO相关接口和实现，比如提供了对os中系统相关的IO功能的封装。我们在进行流式读写（比如读写文件）时，通常会用到该包 |
| bufio | 它在io的基础上提供了缓存功能。在具备了缓存功能后，bufio可以比较方便地提供ReadLine之类的操作 |
| strconv | 提供字符串与基本数据类型互转的能力 |
| os | 本包提供了对操作系统功能的非平台相关访问接口。接口为Unix风格。提供的功能包括文件操作、进程管理、信号和用户账号等 |
| sync | 它提供了基本的同步原语。在多个goroutine访问共享资源的时候，需要使用sync中提供的锁机制 |
| flag | 它提供命令行参数的规则定义和传入参数解析的功能。绝大部分的命令行程序都需要用到这个包 |
| encoding/json | JSON目前广泛用做网络程序中的通信格式。本包提供了对JSON的基本支持，比如从一个对象序列化为JSON字符串，或者从JSON字符串反序列化出一个具体的对象等 |
| http | 通过http包，只需要数行代码，即可实现一个爬虫或者一个Web服务器，这在传统语言中是无法想象的 |

# 完整包列表
| 目录 | 包名 | 说明 |
| -------- | ----- | ----- |
|   | bufio | 实现缓冲的I/O |
|   | bytes | 提供了对字节切片操作的函数 |
|   | crypto | 收集了常见的加密常数 |
|   | errors | 实现了操作错误的函数 |
|   | Expvar | 为公共变量提供了一个标准的接口，如服务器中的运算计数器 |
|   | flag | 实现了命令行标记解析 |
|   | fmt | 实现了格式化输入输出 |
|   | hash | 提供了哈希函数接口 |
	|   | html | <font color=red>实现了一个HTML5兼容的分词器和解析器</font> |
	|   | image | <font color=red>实现了一个基本的二维图像库</font> |
	|   | io | <font color=red>提供了对I/O原语的基本接口</font> |
	|   | log | <font color=red>它是一个简单的记录包，提供最基本的日志功能</font> |
|   | math | 提供了一些基本的常量和数学函数 |
|   | mine | 实现了部分的MIME规范 |
	|   | net | <font color=red>提供了一个对UNIX网络套接字的可移植接口，包括TCP/IP、 UDP域名解析和UNIX域套接字</font> |
	|   | os | <font color=red>为操作系统功能实现了一个平台无关的接口</font> |
	|   | path | <font color=red>实现了对斜线分割的文件名路径的操作</font> |
|   | reflect | 实现了运行时反射，允许一个程序以任意类型操作对象 |
|   | regexp | 实现了一个简单的正则表达式库 |
|   | runtime | 包含与Go运行时系统交互的操作，如控制goroutine的函数 |
|   | sort | 提供对集合排序的基础函数集 |
	|   | strconv | <font color=red>实现了在基本数据类型和字符串之间的转换</font> |
|   | strings | 实现了操作字符串的简单函数 |
|   | sync | 提供了基本的同步机制，如互斥锁 |
|   | syscall | 包含一个低级的操作系统原语的接口 |
|   | testing | 提供对自动测试Go包的支持 |
|   | time | 提供测量和显示时间的功能 |
|   | unicode | <font color=red>Unicode编码相关的基础函数</font> |
| archive | tar | 实现对tar压缩文档的访问 |
|  | zip | 实现对tar压缩文档的访问 |
| compress | bzip2 | 实现了bzip2解压缩 |
|  | flate | 实现了RFC 1951中所定义的DEFLATE压缩数据格式 |
|  | gzip | 实现了RFC 1951中所定义的gzip格式压缩文件的读和写 |
|  | lzw | 实现了 Lempel-Ziv-Welch编码格式的压缩的数据格式 |
|  | zlib | 实现了RFC 1950中所定义的zlib格式压缩数据的读和写 |
| container | heap | 提供了实现heap.Interface接口的任何类型的堆操作 |
|  | lsit | 实现了一个双链表 |
|  | ring | 实现了对循环链表的操作 |
| database | sql | 围绕SQL提供了一个通用的接口 |
|  | sql/driver | 定义了数据库驱动所需实现的接口，同sql包的使用方式 |