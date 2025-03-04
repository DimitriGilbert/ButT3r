# butt3r completion                                        -*- shell-script -*-

# This bash completions script was generated by
# completely (https://github.com/dannyben/completely)
# Modifying it manually is not recommended

_butt3r_completions_filter() {
  local words="$1"
  local cur=${COMP_WORDS[COMP_CWORD]}
  local result=()

  if [[ "${cur:0:1}" == "-" ]]; then
    echo "$words"

  else
    for word in $words; do
      [[ "${word:0:1}" != "-" ]] && result+=("$word")
    done

    echo "${result[*]}"

  fi
}

_butt3r_completions() {
  local cur=${COMP_WORDS[COMP_CWORD]}
  local compwords=("${COMP_WORDS[@]:1:$COMP_CWORD-1}")
  local compline="${compwords[*]}"

  case "$compline" in
    'ts-edit export-function'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--props --return-type --async --no-async --dry-run --no-dry-run")" -- "$cur")
      ;;

    'ts-edit export-type'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--property --dry-run --no-dry-run")" -- "$cur")
      ;;

    'trpc procedure'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "query mutation infinite --schema --loader")" -- "$cur")
      ;;

    'db add-table'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--output-file -o --dry-run --no-dry-run -d")" -- "$cur")
      ;;

    'type-schema'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "props form api --props --form --api")" -- "$cur")
      ;;

    'trpc router'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--schema")" -- "$cur")
      ;;

    'component'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--directory --component-name --props --import --emmet --template --server --client --dry-run --no-dry-run --prettier --no-prettier --export-default --no-export-default")" -- "$cur")
      ;;

    'db export'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--format --table --containerd --pretty --no-pretty")" -- "$cur")
      ;;

    'db import'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--containerd --force --no-force")" -- "$cur")
      ;;

    'api-route'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--methods --directory --schema")" -- "$cur")
      ;;

    'db query'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--containerd --output --format --pretty --no-pretty")" -- "$cur")
      ;;

    'ts-edit'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "export-function export-type import")" -- "$cur")
      ;;

    'create'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--db-provider --db-orm --shadcn-component --install --package-manager --app-ports --app-env --db-ports --db-env --db-user --db-name --app-port --app-network --db --no-db --app-router --no-app-router --auth --no-auth --trpc --no-trpc --tailwind --no-tailwind --shadcn --no-shadcn --mdx --no-mdx --mdx-remote --no-mdx-remote --docker --no-docker --git --no-git")" -- "$cur")
      ;;

    'layout'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--directory --component-name --props --import --emmet --server --no-server --client --no-client --root --no-root --prettier --no-prettier --dry-run --no-dry-run")" -- "$cur")
      ;;

    'start'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--containerd --runner --dev --no-dev")" -- "$cur")
      ;;

    'stop'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--containerd --dev --no-dev")" -- "$cur")
      ;;

    'page'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--directory --component-name --props --import --emmet --server --no-server --client --no-client --prettier --no-prettier --dry-run --no-dry-run")" -- "$cur")
      ;;

    'test'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "unit e2e --directory")" -- "$cur")
      ;;

    'trpc'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "router procedure")" -- "$cur")
      ;;

    'down'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--containerd --dev --no-dev --all --no-all")" -- "$cur")
      ;;

    'up'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "--containerd --runner --dev --no-dev")" -- "$cur")
      ;;

    'db'*)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "export import query add-table")" -- "$cur")
      ;;

    *)
      while read -r; do COMPREPLY+=("$REPLY"); done < <(compgen -W "$(_butt3r_completions_filter "create component db down layout page start stop up ts-edit api-route test trpc type-schema")" -- "$cur")
      ;;

  esac
} &&
  complete -F _butt3r_completions butt3r

# ex: filetype=sh
