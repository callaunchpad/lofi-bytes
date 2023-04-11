#!/bin/bash

function suppress
{
   /bin/rm --force /tmp/suppress.out 2> /dev/null; \
   ${1+"$@"} > /tmp/suppress.out 2>&1 || \
   cat /tmp/suppress.out; \
   bin/rm /tmp/suppress.out;
}

for entry in mp3/*
do
  suppress basic-pitch midi "$entry"
  echo "$entry has been processed successfully."
done