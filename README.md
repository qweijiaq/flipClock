## 软件介绍

软件使用 Electron 框架开发，具有翻页时钟功能，也具有倒计时的功能，支持 Windows 与 Mac 系统。

### 功能说明

1. 翻页时钟
2. 倒计时功能
3. 支持颜色定义
4. 底部滚动文字设置
5. 倒计时双击重置

## 相关截图

### 功能截图

翻页时钟效果
![](https://qiniu.wei-jia.top/%E6%9C%AA%E5%91%BD%E5%90%8D.gif)

倒计时
![](https://qiniu.wei-jia.top/35732096.png)

### 软件配置截图

配置时钟颜色
![](https://qiniu.wei-jia.top/981716581.png)
配置倒计时时间
![](https://qiniu.wei-jia.top/1610060412.png)
配置底部信息
![](https://qiniu.wei-jia.top/1481954651.png)

## 项目启动

### 安装依赖

$ pnpm install

### 启动

$ pnpm dev

## 编译

```bash
# For windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux
```

> 编译过程中，需要从 GitHub 中下载 Electron，这个过程可能非常慢。此时，可以手动下载 Electron 的压缩包，放入：
>
> - `~/Library/Caches/electron`(MacOS)
> - `~/.cache/electron-builder`(Linux)
> - `%LOCALAPPDATA%\electron\cache`(Windows)
>
>   文件夹下，然后重新编译即可。
