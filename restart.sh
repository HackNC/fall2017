#!/bin/bash

kill $(ps -ef | grep "python server.py" | cut -d" " -f2 | head -n 1)
kill $(ps -ef | grep "python server.py" | cut -d" " -f2 | head -n 1)

python server.py &>> server.log &
