#!/usr/bin/env sh

set -eu

cd "web"

for item in `cat list.txt`; do
  echo "item is: ${item}"
  IFS=', ' read -r -a line_array <<< "${item}"
  student_name="${line_array[0]}"
  github_username="${line_array[1]}"

  # should probably use pushd/popd here
  cd "${student_name}"
  npm install
  npm run dev
  open index.html
  cd ..
done

cd ..
