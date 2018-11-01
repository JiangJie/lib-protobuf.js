# lib-protobuf.js

Protobuf的js编解码库。

**NOTE:**

本版本从[protobuf.js](https://github.com/dcodeIO/ProtoBuf.js/)精简而来，以便起到减小代码体积的作用，特别适用于小游戏等对代码体积异常敏感的场景。

简单来说只支持`static code`这一种最高效的使用方式，需要使用反射等功能请直接使用原版本。

支持的基本数据类型也进行了精简，只支持以下类型：

1. int32
2. uint32
3. sint32
4. int64
5. uint64
6. bool
7. string
8. bytes

如需增加更多的基本类型，可以fork或者提PR或者issue。

## Install

`npm install && npm run build`

或者直接使用`dist/protobuf.js`。

## Generate static code from proto file

从proto文件生成静态代码还是使用[protobuf.js](https://github.com/dcodeIO/ProtoBuf.js/)工具。

首先推荐全局安装`npm install protobufjs -g`。

然后推荐使用命令`pbjs protofilename.proto -o jscodefilename.js -t static-module --es6 --no-create --no-verify --no-convert --no-delimited --keep-case`生成静态代码。

**NOTE:** 需要修改生成代码对`protobuf.js`的引用路径。