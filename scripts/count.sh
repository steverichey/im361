#!/usr/bin/env sh

set -eu

git_count()
{
  path="${1}"
  cd "${path}"
  count=$(git rev-list --count HEAD)
  echo "${path}: ${count}"
  cd ..
}

for dir in */ ; do
  git_count "${dir}"
done
