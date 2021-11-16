bucket=my-files
files_location=/opt/s3files/
now_time=$(date +"%H%M%S")
contentType="application/x-compressed-tar"
dateValue=`date -R`
# your key goes here..
s3Key=AKIAWQEOCFWY224LOMFA
# your secrets goes here..
s3Secret=wu78rgdkjrhhdbcoUed+Xm1chCytUTiVeyOUDFJE

function pushToS3()
{
  files_path=$1
  # instead of looping through existing files, loop to n expected fans
  for file in $files_path*
  do
  # here we create a bunch of variables and send to s3 using curl.  
  # ideally, we follow this pattern but mimic the npm build process
  # then send the built code to the appropriate endpoint
    fname=$(basename $file)
    logInfo "Start sending $fname to S3"
    resource="/${bucket}/${now_date}/${fname}_${now_time}"
    stringToSign="PUT\n\n${contentType}\n${dateValue}\n${resource}"
    signature=`echo -en ${stringToSign} | openssl sha1 -hmac ${s3Secret} -binary | base64`
    curl -X PUT -T "${file}" \
     -H "Host: ${bucket}.s3.amazonaws.com" \
     -H "Date: ${dateValue}" \
     -H "Content-Type: ${contentType}" \
     -H "Authorization: AWS ${s3Key}:${signature}" \
      https://${bucket}.s3.amazonaws.com/${now_date}/${fname}_${now_time}
     logInfo "$fname has been sent to S3 successfully."
  done
}
pushToS3 $files_location