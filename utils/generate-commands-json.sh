#!/bin/bash

# Output file
OUTPUT_FILE="butter.dev/src/app/docs/commands.json"

# Initialize JSON array
echo '[' > $OUTPUT_FILE

# Function to extract command info
extract_command() {
  local command=$1
  local description=$2
  local help=$(butt3r $command --help | sed 's/"/\\"/g' | sed ':a;N;$!ba;s/\n/\\n/g')
  local examples=$(butt3r $command --examples | sed 's/"/\\"/g' | sed ':a;N;$!ba;s/\n/\\n/g')
  
  cat <<EOF
  {
    "command": "$command",
    "description": "$description",
    "help": "$help",
    "examples": [$(
      IFS=$'\n'
      first=true
      for example in $examples; do
        if $first; then
          first=false
        else
          echo -n ","
        fi
        echo -n "\"$example\""
      done
    )]
  }
EOF
}

# Get list of commands
commands=$(butt3r --help | awk '/^  [a-z]/ {print $1}')

# Process each command
first=true
for cmd in $commands; do
  if $first; then
    first=false
  else
    echo "," >> $OUTPUT_FILE
  fi
  
  description=$(butt3r $cmd --help | head -n 1)
  extract_command $cmd "$description" >> $OUTPUT_FILE
done

# Close JSON array
echo ']' >> $OUTPUT_FILE

echo "Commands JSON generated at $OUTPUT_FILE" 