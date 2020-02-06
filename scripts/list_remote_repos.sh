#!/usr/bin/env sh

set -eu

list_remote()
{
  path="${1}"
  cd "${path}"
  git remote -v
  cd ..
}

for dir in */ ; do
  list_remote "${dir}"
done
