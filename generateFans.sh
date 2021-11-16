#!/usr/bin/env bash
npm install

function generateSingleFan() 
{
    npm run build
    cp -vr ./dist ./newFan_$1
    # send to s3
    # delete dist
}

function generateFansAndPushToS3()
{
    for i in {0..4}
    do
        generateSingleFan $i
    done
}

generateFansAndPushToS3