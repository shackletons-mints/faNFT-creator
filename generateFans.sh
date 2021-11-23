#!/usr/bin/env bash
npm install

function generateSingleFan() 
{
    # TODO: 
    # compile code
    # serve it up
    # generate gif
    # kill server
    # delete compiled code
    # repeat N times
}

function generateFansAndCreateGif()
{
    for i in {0..4}
    do
        generateSingleFan $i
    done
}

generateFansAndCreateGif