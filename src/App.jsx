// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import illocaleLogo from './assets/illocaleLogo.png'
import comingSoonLogo from './assets/comingSoonLogo.png'
import backgroundImage from "./assets/bg.png"; // Adjust the path based on your project structure
import './App.css'

function App() {


  const styles = {
    container: {
      height: '100%',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      backgroundColor: '#FFFF00',
      color: '#F042A3FF',
      padding: '10px 0',
      textAlign: 'center',
      justifyContent: "space-evenly", 
      alignItems: "center", 
      // height: '20vh'
    },
    logo:{
      objectFit: 'cover',
      height: '12vh'
    },
    comignSoonLogo:{
      objectFit: 'cover',
      maxHeight: '30vh',
      maxWidth: '90vw'
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
    },
    navItem: {
      color: '#fff',
      margin: '0 15px',
      textDecoration: 'none',
    },
    main: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      color: "#000",
      zIndex: 1,
    },
    background: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${backgroundImage})`, // Use the imported image
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 1,
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white overlay
      zIndex: 2,
    },
    content: {
      position: "relative",
      zIndex: 3, // Ensure content is above the background and overlay
    },
    footer: {
      backgroundColor: '#FFFF00',
      color: '#F042A3FF',
      padding: '10px 0',
      textAlign: 'center',
      marginTop: 'auto',
      // height: '10vh'
    }
  };

  return (
    <>
      <div style={styles.container}>
        {/* Header Section */}
        <header style={styles.header}>
          <img src={illocaleLogo} alt="Website Logo" style={styles.logo} />
        </header>

        {/* Main Content Section */}
        <main style={styles.main}>
          {/* Background Image */}
          <div style={styles.background}></div>

          {/* White Opacity Overlay */}
          <div style={styles.overlay}></div>

          {/* Content */}
          <div style={styles.content}>
            <img src={comingSoonLogo} alt="coming Soon Logo" style={styles.comignSoonLogo} />
            <h2>Coming Soon.</h2>
          </div>
        </main>

        {/* Footer Section */}
        <footer style={styles.footer}>
          <p>&copy; 2025 Il Locale Pizza. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
