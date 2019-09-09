#!/bin/bash
echo "【Commit Start】auto commit start..."
indexLock="./.git/index.lock"

npm run build
npm version patch -f

# 如果存在就删除
if [ ! -d "$indexLock" ];then
    rm -f .git/index.lock
fi

branch_name=$(git symbolic-ref --short -q HEAD)
git add -A

# if input argument
if [ ! -n "$1" ] ;then
    commit="publish自动提交"
else
    commit=$1
fi
git commit -m "$commit"
git push origin "$branch_name"
echo "\033[32m【Commit Finish】\033[0m auto commit end..."

echo "【Publish Start】publish by autocm.sh"
npm publish
echo "\033[32m【Publish Finish】\033[0m publish by autocm.sh"
exit 0
