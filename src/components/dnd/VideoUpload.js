import React, { useState } from 'react'
import './video_uploas.css'
import { Select, Button } from 'antd'
import Description from '../description/Description'

const VideoUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([])
  const [selectedFormats, setSelectedFormats] = useState({})

  const handleFileDrop = (event) => {
    event.preventDefault()
    const files = event.dataTransfer.files
    handleFiles(files)
  }

  const handleFileSelect = (event) => {
    const files = event.target.files
    handleFiles(files)
  }

  const handleFiles = (files) => {
    const validFiles = Array.from(files).filter(
      (file) => file.type === 'video/mp4' || file.type === 'video/quicktime' || file.type === 'video/x-msvideo'
    )

    if (validFiles.length > 0) {
      setSelectedFiles(validFiles)
    } else {
      alert('Please upload only MP4, MOV, or AVI video files.')
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleFormatChange = (value, index) => {
    setSelectedFormats((prev) => ({
      ...prev,
      [index]: value,
    }))
  }

  const handleDownload = async (input, format) => {
    let sourceVideoFile = input
    let convertedVideoDataObj = await convert(sourceVideoFile, format)

    downloadVideo(convertedVideoDataObj)
  }

  function downloadVideo(convertedVideoDataObj) {
    let a = document.createElement('a')
    a.href = convertedVideoDataObj.data
    a.download = convertedVideoDataObj.name + '.' + convertedVideoDataObj.format
    a.click()
  }

  const convert = function (videoFileData, targetFormat) {
    try {
      targetFormat = targetFormat.toLowerCase()
      let reader = new FileReader()
      return new Promise((resolve) => {
        reader.onload = function (event) {
          let contentType = 'video/' + targetFormat
          let data = event.target.result.split(',')
          let b64Data = data[1]
          let blob = getBlobFromBase64Data(b64Data, contentType)
          let blobUrl = URL.createObjectURL(blob)

          let convertedVideo = {
            name: videoFileData.name.substring(0, videoFileData.name.lastIndexOf('.')),
            format: targetFormat,
            data: blobUrl,
          }
          resolve(convertedVideo)
        }
        reader.readAsDataURL(videoFileData)
      })
    } catch (e) {
      console.log('Error occurred while converting : ', e)
    }
  }

  function getBlobFromBase64Data(b64Data, contentType, sliceSize = 512) {
    const byteCharacters = atob(b64Data)
    const byteArrays = []

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize)

      const byteNumbers = new Array(slice.length)
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i)
      }

      const byteArray = new Uint8Array(byteNumbers)
      byteArrays.push(byteArray)
    }

    const blob = new Blob(byteArrays, { type: contentType })
    return blob
  }
  const handleRemove = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
    setSelectedFormats((prevFormats) => {
      const newFormats = { ...prevFormats }
      delete newFormats[index]
      return newFormats
    })
  }
  return (
    <>
      {selectedFiles.length == 0 && (
        <div className="dnd">
          <div className="dnd_container" onDrop={handleFileDrop} onDragOver={handleDragOver}>
            <p> Drag and drop your files </p>
            <p className="dnd_or">OR</p>
          </div>
          <div className="dnd_input">
            <input type="file" accept=".mp4, .mov, .avi" multiple onChange={handleFileSelect} id="fileInput" />
            <p>
              <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                Select Files
              </label>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </p>
          </div>
        </div>
      )}
      {selectedFiles.length > 0 && (
        <div className="selected-files">
          <div>
            <div className="card-container">
              {selectedFiles.map((file, index) => (
                <div className="card" key={index}>
                  <p className="convert-to p"> {file.name}</p>
                  <div className="convert-to drop-down">
                    <p>Convert to</p>
                    <Select onChange={(value) => handleFormatChange(value, index)} defaultValue="mp4">
                      <Select.Option value="mp4">MP4</Select.Option>
                      <Select.Option value="avi">AVI</Select.Option>
                      <Select.Option value="mov">MOV</Select.Option>
                    </Select>
                  </div>
                  <div className="download convert-to">
                    <Button
                      color="default"
                      variant="solid"
                      onClick={() => handleDownload(file, selectedFormats[index] || 'mp4')} // Use the selected format or default to 'mp4'
                    >
                      Download
                    </Button>
                  </div>
                  <p className="close-btn" onClick={() => handleRemove(index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#b53836"
                    >
                      <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
                    </svg>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <>
        <Description />
      </>
    </>
  )
}

export default VideoUpload
