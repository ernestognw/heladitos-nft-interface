for f in BG=*; do mv "$f" "${f#BG=}"; done; for file in *; do mv "$file" `echo $file | tr ' ' '-'` ; done; for file in *; do mv "$file" `echo $file | tr '[:upper:]' '[:lower:]'` ; done;
