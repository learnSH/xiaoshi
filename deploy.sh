#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


push_addr=https://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@github.com/learnSH/xiaoshi.git # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xiaoshiye/vuepress-theme-vdoing.git
commit_info=`git describe --all --always --long`
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=master # 推送的分支

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $dist_path

git init
git add -A
git config user.name shi
git config user.email 543582490@qq.com
git commit -m "deploy, $commit_info"
git push -f $push_addr HEAD:$push_branch
cd -
rm -rf $dist_path
