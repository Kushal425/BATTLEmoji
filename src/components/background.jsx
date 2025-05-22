function Background() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/X O.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Background