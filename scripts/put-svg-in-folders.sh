for directory in */; do
  cd $directory
  for file in *.svg; do
    mkdir ${file%.*} 
    mv "$file" `echo ${file%.*}/image.svg`;
  done; 
  cd ..
done;
