#!/usr/bin/env sh

set -eu

today_date=`date +%Y-%m-%d`

if [ "${#}" -lt 1 ]; then
  echo "Project name parameter is required"
  exit 1
fi

project_name="${1}"

get_git_name()
{
  name = "${1}"
  project = "${2}"
  return "git@github.com:${name}/im361${project}.git"
}

if [ -d "${project_name}" ]; then
  rm -rf "${project_name}"
fi

mkdir "${project_name}"

for item in `cat list.txt`; do
  echo "item is: ${item}"
  IFS=', ' read -r -a line_array <<< "${item}"
  student_name="${line_array[0]}"
  github_username="${line_array[1]}"

  cd "${project_name}"
  git_remote_name="git@github.com:${github_username}/im361${project_name}.git"
  echo "${git_remote_name}"
  git clone "${git_remote_name}" "${student_name}"

  cd "${student_name}"
  # git checkout "master@{${today_date} 00:00:00 -0500}"
  git checkout `git rev-list -n 1 --first-parent --before="${today_date} 12:00" master`
  cd ..

  cd ..
done

echo "Done."
