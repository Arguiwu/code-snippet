### 样式初始化 使用 box-sizing: border-box 将border-width纳入width
```css
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
```
or
```css
	html {
		box-sizing: border-box;
	}
	*, *::before, *::after {
		box-sizing: border-box;
	}
```

### 使用not选择器 剔除不符合项
```css
	.nav li:not(:last-child) {
		border-right: 1px solid #666;
	}
```

### 在body上使用 line-height初始化
```css
	body {
		line-height: 1.5;
	}
```

### 垂直居中任何元素 示例
```css
	html, body {
		height: 100%;
		margin: 0;
	}
	body {
		display: flex;
		align-items: center;
	}
```

### 使用相邻选择器
```css
	* + * {
		margin-top: 1.5em;
	}
```

### 使用 table-layout: fixed 等宽布局
```css
	.calendar {
		table-layout: fixed;
	}
```

### 使用 space-between 等距
```css
	list {
		display: flex;
		justify-content: space-between;
	}
	.list .person {
		flex-basis: 23%;
	}
```

### 当a标签没有文本时 显示链接 及默认a标签样式
```css
	a[href^="http"]:empty::before {
		content: attr(href)
	}
	a[href]:not([class]) {
		color: red;
	}
```

### 使用 > * 创建统一的垂直
```css
	.info > * {
		margin-bottom: 1.25rem;
	}
```

### 创建具有比例的 div
```css
	.container {
		height: 0;
		padding-bottom: 20%;	// 标识 100% / 20% 高是宽的 1/5
		position: relative;
	}
	.container div {
		border: 2px solid #ddd;
		height: 100%;
		position: absolue;
		top" 0;
		width: 100%;
	}
```

### 美化图片链接实效
```css
	img {
		display: block;
		font-family: Helvetica, Arial, sans-serif;
		font-weight: 300;
		height: auto;
		line-height: 2;
		position: relative;
		text-align: center;
		width: 100%;
	}
	img:before {
		content: "We're sorry, the image below is broken :(";
		display: block;
		margin-bottom: 10px;
	}
	img:after {
		content: "(url: " attr(src) ")";
		display: block;
		font-size: 12px;
	}
```