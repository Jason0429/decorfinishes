#!/bin/bash
IMAGES="./showcase_images"
NUM=0

cd $IMAGES

for FILE in *; do
  EXTENSION="${FILE##*.}"
  mv $FILE "img${NUM}.${EXTENSION}"
  ((NUM++))
  echo "img${NUM}.${EXTENSION}"
done