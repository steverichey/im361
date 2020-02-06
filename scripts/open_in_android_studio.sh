#!/usr/bin/env sh

set -eu

if [ "${#}" -lt 1 ]; then
  echo "Path to project is required"
  exit 1
fi

project_path="${1}"

open -a "/Applications/Android Studio.app" "${project_path}"
