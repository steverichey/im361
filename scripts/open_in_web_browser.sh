#!/usr/bin/env sh

set -eux

while read item; do
  echo "item is: ${item}"
  IFS=', ' read -r -a line_array <<< "${item}"
  student_name="${line_array[0]}"
  github_username="${line_array[1]}"

  pushd "web/${student_name}"
  set +e
  npm install
  # npm run dev
  npx webpack
  open index.html
  set -e
  popd
done <list.txt
