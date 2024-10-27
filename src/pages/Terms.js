import React from 'react'
import './terms.css'
import Navigator from '../components/header/Navigator'
import Footer from '../components/footer/Footer'

const Terms = () => {
  return (
    <>
      <Navigator />
      <div className="terms">
        <h1>Terms and Conditions</h1>

        <h2>Use of the App</h2>
        <p>
          The App provides a service to convert video files in various formats. You may use this App for personal or
          commercial purposes as long as your use complies with these terms and applicable laws.
        </p>

        <h2>No Storage of User Content</h2>
        <p>
          We do not store or retain any of the videos or files uploaded to the App for conversion. All files are
          processed in memory and are removed from our system once the conversion is completed or when you exit the App.
          We prioritize your privacy, and no user content is saved on our servers or databases at any time.
        </p>

        <h2>Automatic Deletion of Data</h2>
        <p>All videos, files, and other data processed by the App are automatically deleted when:</p>
        <ul>
          <li>The user exits the App.</li>
          <li>The user clears or resets the App manually.</li>
        </ul>
        <p>This ensures that no residual data remains after you have used the App.</p>

        <h2>User Responsibilities</h2>
        <p>
          You are responsible for ensuring that any videos or content uploaded to the App do not violate the
          intellectual property rights of third parties or any laws and regulations. You agree not to use the App to
          convert any content that is illegal, offensive, or violates any terms of use.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          While we strive to provide a reliable service, Video converter provided on an "as-is" basis without any
          warranties of any kind. We do not guarantee the performance or results of the video conversion. Video
          converter will not be liable for any damages, loss of data, or issues arising from the use of the App.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Terms
