#!/usr/bin/env bash
bucket="fan-nft"
now_time=$(date +"%H%M%S")
contentType="application/x-compressed-tar"
dateValue=`date -R`
# store these in a config
s3Key=AKIA3IQVSDT42NXZI6M2
s3Secret=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

npm install

function pushToS3()
{
  files_path=$1
  for file in $files_path*
  do
    # apparently this is signature v2 and we need v4.  But that seems to be a bitch
    # best idea moving forward is to probably rewrite this file in node 
    # with an aws sdk
    fname=$(basename $file)
    printf "Start sending $fname to S3"
    resource="/${bucket}/${now_date}/${fname}_${now_time}"
    stringToSign="PUT\n\n${contentType}\n${dateValue}\n${resource}"
    #prepare signature hash to be sent in Authorization header
    signature_hash=`echo -en ${signature_string} | openssl sha1 -hmac ${s3_secret_key} -binary | base64`
    signature=`echo -en ${stringToSign} | openssl sha1 -hmac ${s3Secret} -binary | base64`
    curl -X PUT -T "${file}" \
     -H "Host: ${bucket}.s3.us-east-2.amazonaws.com" \
     -H "Date: ${dateValue}" \
     -H "Content-Type: ${contentType}" \
     -H "Authorization: AWS ${s3Key}:${signature}" \
      https://${bucket}.s3.us-east-2.amazonaws.com/${now_date}/${fname}_${now_time}
     printf "$fname has been sent to S3 successfully."
  done
}

function generateSingleFan() 
{
    npm run build
    # cp -vr ./dist ./newFan_$1
    # send to s3
    pushToS3 ./dist
    # delete dist
}

function generateFansAndPushToS3()
{
    # for i in {0..4}
    # do
    #     generateSingleFan $i
    # done
    generateSingleFan
}

generateFansAndPushToS3